const router = require('express').Router();
const mysql = require('mysql');
const path = require('path');
const csvtojson = require('csvtojson');

module.exports = function (app) {
    
    app.get('/', (req, res) => {

        let Databasecreation = "CREATE DATABASE IF NOT EXISTS TEST;";
        
        conn.query(Databasecreation, function(err, data) {
            if(err) console.log("error creating database");
            else console.log("Database created success");
        });
        
        res.sendFile(path.join(__dirname, '../index.html'));
    })
}