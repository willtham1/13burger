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
    host: 'z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'sd6s432g20y2sh9u',
    password: 'bmm3ix4ikmfqlw6s',
    database: 'tgraeimi3q0hcvpe'
  });
};

module.exports = connection;
