import numpy
from flask import Flask
from flask_cors import CORS
from flask import request
from joblib import load
from spam import score

app = Flask(__name__, static_folder='react-app/build', static_url_path='/react-app')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/results', methods = ['POST'])
def spamClassify():
    text = request.get_json()
    pipeline = load("spam_classification.joblib")
    result = (pipeline.predict([text]))
    return {'result': str(result[0]), 'accuracy_score': score}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))