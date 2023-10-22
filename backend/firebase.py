import firebase_admin
from firebase_admin import db, credentials


# Validating Google credentials for Firebase SDK

cred = credentials.Certificate('credentials.json')

def connectToFirebase(url):
    try:
        firebase_admin.initialize_app(cred, {"databaseURL" : url})
        print("Successfully connected to Firebase!!")

    except:
        print("Error occured while validating Firebase credentials!")

    





