from flask import Flask

app = Flask(__name__)

@app.route('/home')
def homepage():
    return {'result': "Hello World"}