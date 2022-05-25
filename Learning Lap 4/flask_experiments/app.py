import json
from random import *
from flask import Flask, jsonify, render_template, url_for, request
from flask_cors import *
from werkzeug import exceptions

#url_for is close to navlink in react but in python!

# flask is a class - create an instance of a Flask class
app = Flask(__name__)

# use cors for the app

CORS(app)

# app.use("/", controller)

@app.route("/")
def index():
    return render_template("./index.html", app_name="Bumble")

@app.route("/hive")
def hive():
    return jsonify({
        "number_of_bees":123123,
        "queen": True
    })

@app.route("/bee")
def show_all_bees():
    bees = [{
    'id': bee,
    'name': choice(["Bee1", "Bee2", "Bee3"]),
    "age": f"{randrange(1,31)} days old"
    } for bee in range(1,10)]
    return json.dumps({
        "bees": bees
    })

@app.route("/bee/<int:id>", methods=["POST"])
def create_bee():
    data = request.json

    print(data)

    return {
        "success": True,
        "message": "We definately really created your bee :)"
    }

@app.route("/bee/<int:id>", methods=["GET", "DELETE"])
def interract_with_bee(id):

    chosen_name = ["Beeyonce", "Beetrice", "Beealla", "Beenedict"]

    if request.method == "GET":
        return jsonify({
            "id": id,
            "name": chosen_name[id],
            "age": "no more than 30 days"
        }), 501

    elif request.method == "DELETE":
        chosen_name.remove(chosen_name[id])
        return jsonify({
            "sucess": True,
            "message": f"{chosen_name[id]} is dead. Week for Bee/Ber"
        }), 201

@app.errorhandler(exceptions.NotFound)
def page_not_found(err):
    return render_template("./index.html", app_name="Broke", error=f"{err}")
if __name__ == "__main__":
    app.run(debug=True)

