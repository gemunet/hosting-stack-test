from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app = Flask(__name__, 
    static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/hello')
def hello_world():
    return 'Hello, World! from python'

if __name__ == '__main__':
    app.run()