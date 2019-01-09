'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.json()); // Middleware to only parse json
app.use(bodyParser.urlencoded({extended: true})); // Important or not working


var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/test", { useNewUrlParser: true }, function (err, client) {
    if (err) throw err;

    const db = client.db();

    // Fetch all emails to test data
    /*db.collection('emails').find().toArray((err, result) => {
        if (err) throw err;
        console.log(result);
    });*/

    app.post('/send-email', (req, res) => {
        let body= {};
        db.collection("emails").insertOne(req.body, {},(err, result) => {
            if (result.result.ok) {
                body = {
                    "status": 200,
                    "message": "Email OK",
                    "email": result.result
                };
            } else {
                body = {
                    "status": 500,
                    "message": "Email NOK",
                    "error": result.result
                }
            }

            res.json(body);
        });
    });

    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
});




