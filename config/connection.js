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
    user: 'root',
    password: 'g7t59b4p5hcfjtht',
    database: 'xhlg4bp7okjk8iy5'
  });
};

module.exports = connection;
