const express = require('express')
const path = require('path');
const csvtojson = require('csvtojson');
const mysql = require("mysql");
const {Worker, isMainThread} = require('worker_threads');

const app = express();
const PORT = process.env.PORT || 3000;

function initialiseConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        multipleStatements: true

    });
}

let conn = initialiseConnection();
global.conn = conn;

app.use(express.json());

//routes
require('./routes/upload')(app);

app.listen(PORT, function () {
    console.log('Server listening on port ', PORT);
});