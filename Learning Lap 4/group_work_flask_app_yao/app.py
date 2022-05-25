import json
from random import *
from flask import Flask, jsonify, render_template, url_for, request
from flask_cors import *
from werkzeug import exceptions

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqllite:///friends.db'

# Initialise the Database
db = SQLAlchemy(app)

# Create db model
class Friends(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, deafult=datetime.utcnow)

    # Create a function to return a string when we add something __repr__
    def __repr__(self):
        return '<Name %r>' % self.id

@app.route("/")
def index():
    return render_template("./index.html", app_name="Bumble")