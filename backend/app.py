# Dowmloading dependencies for this project.
# We recommend that you run the project in a virtual env

import os, yaml

# Install dependencies
with open('package.yaml', 'r') as file:
    s = yaml.safe_load(file)['dependencies']

os.system('pip install ' + s)

# Start the API server
os.system("python api_server.py")






