const mysql = require("mysql");

const dbconfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'goalrush',
  multipleStatements: false,
};

const db = mysql.createConnection(dbconfig);

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  module.exports = db;