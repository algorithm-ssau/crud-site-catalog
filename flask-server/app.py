from flask import Flask
from flask import render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://Team06:TTD07KlWDvD59Zrp@test-cluster-ggkus.mongodb.net/test?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route('/about')
def hello_world():
    response = []
    temp = mongo.db.products.find({})

    return render_template("task.html", temp=list(temp))

if __name__ == '__main__':
    app.run()