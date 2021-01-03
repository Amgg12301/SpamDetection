from flask import Flask
from joblib import load

app = Flask(__name__)

@app.route('/home')
def homepage():
    return {'result': "Hello World"}

def spamClassify(text):
    pipeline = load("spam_classification.joblib")
    return pipeline.predict(text)
