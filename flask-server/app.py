from flask import Flask, request, jsonify
from flask import render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb+srv://Team06:TTD07KlWDvD59Zrp@test-cluster-ggkus.mongodb.net/test?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route('/about')
def about():
    return render_template("task.html")

@app.route('/category/create', methods=["POST"])
def createCatalog():
    data = request.json
    print(request.json)
    categoryName = data["name"]
    categoryDescription = data["description"]
    return str(
     mongo.db.categories.save({
        "name": categoryName,
        "description": categoryDescription,
        "products": []
    }))
if __name__ == '__main__':
    app.run()