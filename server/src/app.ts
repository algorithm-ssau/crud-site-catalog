import express from "express";
import path from "path";
import mongoose from "mongoose";

const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/crud-site-catalog", { useNewUrlParser: true })
  .then(() => console.log("connected"))
  .catch(err => {
      return console.log(err);
  });

app.get( "/", ( req, res ) => {
    res.send( "hello" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
