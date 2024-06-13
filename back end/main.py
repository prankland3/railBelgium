from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from auth import signUp
from auth import login

import io

app = Flask(__name__)
CORS(app)

@app.route("/",methods=["GET"])
def homepage():
    return jsonify({"server":"RailBelgium","code":200})

@app.route("/login", methods=["POST"])
def login():
    data = request.form
    username = data["username"]
    password = data["password"]
    return login.login(username,password)

@app.route("/signup", methods=["POST"])
def signup():
    data = request.form
    username = data["username"]
    password = data["password"]
    passwordRepeat = data["passwordRepeat"]
    email = data["email"]
    firstName = data["firstName"]
    lastName = data["lastName"]

    return signUp.signUp(username,password,passwordRepeat,email,firstName,lastName)

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)