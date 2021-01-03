import numpy
from flask import Flask
from flask_cors import CORS
from flask import request
from joblib import load

app = Flask(__name__)
CORS(app)

@app.route('/home')
def homepage():
    return {'result': "Hello World"}

@app.route('/results', methods = ['POST'])
def spamClassify():
    text = request.get_json()
    pipeline = load("spam_classification.joblib")
    result = (pipeline.predict([text]))
    return {'result': str(result[0])}
