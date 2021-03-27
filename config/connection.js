var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@Teddybear99694588",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

if (process.env.JAWSDB_ULR) {
  connection = mysql.createConnection(process.env.JAWSDB_ULR);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'gdxx01h1zwx3fncs',
    password: 'l5atra5y88qionq1',
    database: 'k28kcboa5y2o7yf2'
  });
};

module.exports = connection;
