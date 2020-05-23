cd server
start npm start

cd ..
cd front
start npm start

cd ..
cd flask-server
SET FLASK_APP=app.py
flask run