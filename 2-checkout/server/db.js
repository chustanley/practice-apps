const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS// NOTE FOR LATER
});



const db = Promise.promisifyAll(connection, { multiArgs: true });


db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`))
  .then(() => db.queryAsync(`USE ${process.env.DB_NAME}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cookie VARCHAR(100) UNIQUE, user_id INT )"
    )
  )
  .then(() =>
  // Expand this table definition as needed:
  db.queryAsync(
    "CREATE TABLE IF NOT EXISTS personal (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR(100), password VARCHAR(50), address varchar(100), city VARCHAR(50), state VARCHAR(50), zipcode VARCHAR(50), phone VARCHAR(50), creditCard VARCHAR(50), expiration VARCHAR(50), cvv VARCHAR(50), billingZip VARCHAR(50))"
  )
)
  .catch((err) => console.log(err));

module.exports = db;
