var mysql = require("mysql");
var dotenv = require("dotenv").config();
var password = process.env.mysql_password;
var connection;

connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: password,
    database: "feedbag_db"
});


connection.connect(function(err){
  if (err){
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
})

module.exports = connection;
