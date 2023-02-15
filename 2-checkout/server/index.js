require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
// This calls the db.js page and runs the connnection for mysql.
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

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
