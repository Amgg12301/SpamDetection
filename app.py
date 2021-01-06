import numpy
from flask import Flask
from flask_cors import CORS
from flask import request
from joblib import load
from spam import score

app = Flask(__name__)
CORS(app)

@app.route('/results', methods = ['POST'])
def spamClassify():
    text = request.get_json()
    pipeline = load("spam_classification.joblib")
    result = (pipeline.predict([text]))
    return {'result': str(result[0]), 'accuracy_score': score}
