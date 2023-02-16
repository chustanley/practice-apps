require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const bodyParser = require('body-parser');
// Establishes connection to the database on server start
// This calls the db.js page and runs the connnection for mysql.
const db = require("./db");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);


app.get('/', (req, res, next) => {
  console.log(req.session_id, 'hello');
  next();
})

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


app.get('/cookie', (req, res) => {
  db.queryAsync(`SELECT user_id FROM responses WHERE cookie='${req.session_id}'`)
  .then((userID) => {
    if (!userID) {
      throw userID
    }
    console.log(userID[0][0].user_id);
    return db.queryAsync(`SELECT * FROM personal WHERE id='${userID[0][0].user_id}'`)
  })
  .then((info) => {
    if (!info) {
      throw info;
    }
    res.status(200).send(info);
  })
  .catch((error) => {
    res.status(404).send(error);
  })
})





app.post('/account', (req, res) => {
  console.log(req.body)
  var account = req.body;
  db.queryAsync(`INSERT INTO personal (name, email, password) VALUES ('${account.name}', '${account.email}', '${account.password}')`)
  .then((data) => {
    if (!data) {
      throw data
    }
    // res.status(200).send(data);
    return db.queryAsync(`SELECT * FROM personal WHERE email='${account.email}'`)
  })
  .then((info) => {
    if (!info) {
      throw info;
    }
    return info[0][0].id;
  })
  .then((userId) => {
    if (!userId) {
      throw userId;
    }
    return db.queryAsync(`INSERT INTO responses (cookie, user_id) VALUES ('${req.session_id}', '${userId}')`)
  })
  .then((result) => {
    if (!result) {
      throw result
    }
    res.status(200).send(result);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

app.post('/address', (req, res) => {
  console.log(req.body)
  var account = req.body;

  db.queryAsync(`UPDATE personal SET address='${account.address}',city='${account.city}', state='${account.state}', zipcode='${account.zipcode}', phone='${account.phone}' WHERE email='${account.email}';`)
  .then((data) => {
    if (!data) {
      throw data
    }
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

app.post('/credit', (req, res) => {
  console.log(req.body)
  var account = req.body;

  db.queryAsync(`UPDATE personal SET creditCard='${account.creditCard}', expiration='${account.expiration}', cvv='${account.cvv}', billingZip='${account.billingZipcode}' WHERE email='${account.email}';`)
  .then((data) => {
    if (!data) {
      throw data
    }
    res.status(200).send(data);
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})
/****
 *
 *
 * Other routes here....
 *
 *
 * make post request to mysql with the data you want to store
 *
 *
 * when user login, we check if that accoutn is already there?
 *
 * but then we have cookies.. so maybe in the beginning at the
 *  main page check if it has cookies? so then when someone wants to check out itll immediately
 * udpate state and bring them to the.. confirmation page? with data from sql.
 *
 *
 *
 *
 */

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
