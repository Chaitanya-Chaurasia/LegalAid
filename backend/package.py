import os, yaml

with open('package.yaml', 'r') as file:
    s = yaml.safe_load(file)['dependencies']


os.system('pip install ' + s)