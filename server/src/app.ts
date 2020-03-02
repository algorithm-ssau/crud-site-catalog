import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

// connect to db
mongoose.connect("mongodb://localhost:27017/crud-site-catalog", { useNewUrlParser: true })
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

const products = require("./routers/product-router");
const categories = require("./routers/category-router");

app.use("/products", products);
app.use("/category", categories);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
