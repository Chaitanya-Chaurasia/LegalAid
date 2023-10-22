import os, yaml
import pathlib

import vertexai
from vertexai.preview.language_models import TextGenerationModel

import requests
from flask import Flask, session, abort, redirect, request, jsonify
from flask_cors import CORS

from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests

import google.cloud.aiplatform as aiplatform


with open('config/package.yaml', 'r') as file:
    oauth_client_id = yaml.safe_load(file)['GOOGLE_OAUTH_ENV']['CLIENT_ID']

with open('config/package.yaml', 'r') as file:
    oauth_client_secret = yaml.safe_load(file)['GOOGLE_OAUTH_ENV']['CLIENT_SECRET']

with open('config/package.yaml', 'r') as file:
    map_api_key = yaml.safe_load(file)['GOOGLE_MAPS_API_KEY']

app = Flask("Backend API Server")
CORS(app)

app.secret_key = oauth_client_secret # make sure this matches with that's in client_secret.json

os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1" # to allow Http traffic for local dev

GOOGLE_CLIENT_ID = oauth_client_id
client_secrets_file = os.path.join(pathlib.Path(__file__).parent, "config/oauth_secret.json")

flow = Flow.from_client_secrets_file(
    client_secrets_file=client_secrets_file,
    scopes=["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"],
    redirect_uri="http://127.0.0.1:80/callback"
)


def login_is_required(function):
    
    def wrapper(*args, **kwargs):
        if "google_id" not in session:
            return abort(401)  # Authorization required
        else:
            return function()

    return wrapper


@app.route("/login")    
def login():
    authorization_url, state = flow.authorization_url()
    session["state"] = state
    return redirect(authorization_url)


@app.route("/callback")
def callback():

    print("Here")
    flow.fetch_token(authorization_response=request.url)

    if not session["state"] == request.args["state"]:
        abort(500)  # State does not match!

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID
    )

    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")
    return redirect("/protected_area")



# Modify the routes to return values to redirect
# JS wil use fetch. Backend to return "Welcome USER"
# Frontend will parse that.

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@app.route("/")
def index():
    return "Hello World <a href='/login'><button>Login</button></a>"


@app.route("/protected_area")
@login_is_required
def protected_area():
    return f"Hello {session['name']}! <br/> <a href='/logout'><button>Logout</button></a>"

@app.route("/response")
def generate_text_route():
    """Generates text using text-bison LLM."""

    vertexai.init(project="legalaid-402716", location="us-central1")
    parameters = {
        "max_output_tokens": 640,
        "temperature": 0.5,
        "top_p": 0.8,
        "top_k": 40
    }

    model = TextGenerationModel.from_pretrained("text-bison-32k")
    userInput = request.args.get("situation")
    print(userInput)

    jsonResponse = model.predict("""Given a situation in natural language, please provide me with recommendations, charges and three most relevant laws in Massachusetts and the corresponding human right they pertain to. (JSON) Situation:  """ + userInput, **parameters)

    return jsonResponse.text[8:-4]

@app.route("/locations")
def get_legal_firms():
    # Get user's location from request

    latitude = request.args.get('latitude') if request.args.get('latitude') else 37.7749
    longitude = request.args.get('longitude') if request.args.get('longitude') else -122.4194


    # Make a request to Google Places API
    url = f'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={latitude},{longitude}&radius=500&type=lawyer&consulting&key={map_api_key}'

    response = requests.get(url)
    data = response.json()

    # # Extract relevant information
    firms = [{"name": place["name"]if place["name"] else "Not found", 'lat': place["geometry"]["location"]["lat"] if place["geometry"]["location"] else "Not found", 'lng': place["geometry"]["location"]["lng"] if place["geometry"]["location"] else "Not found"} for place in data['results']]

    
    return jsonify(firms[:5])


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)

    
