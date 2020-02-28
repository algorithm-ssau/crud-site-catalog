import express from "express";
import path from "path";

const app = express();
const port = 8080;

app.get( "/", ( req, res ) => {
    res.send( "hello" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
