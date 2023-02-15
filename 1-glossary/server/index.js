require("dotenv").config();
var db = require('./db.js');

const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
var bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '../client/src'))) // RENDERS THE STATIC HTML FILE WHERE OUR SOURCES ARE.
app.use(bodyParser.urlencoded({ extended: false })) // PARSES THE INFORMATION FROM BROWSER INTO SERVER READABLE CODE.


app.post('/save', (req, res) => {
  console.log('----in server --->', req.body);

  db.savingWordDef(req.body.word, req.body.definition)
    .then((data) => {
      if (!data) {
        throw data;
      }
      res.status(200).send(data);
    })
    .catch((error) => { // if word is already inside database, error will be sent
      res.status(404).send(error);
    })
})

app.get('/list', (req, res) => {
    db.glossary.find()
      .then((data) => {
        if (!data) {
          throw data;
        }
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(404).send(error)
      })
})



app.post('/filter', (req, res) => {

  db.glossary.findOne({word: req.body.word})
    .then((data) => {
      if (!data) {
        throw data;
      }
      console.log('------ found data ---- >', data)
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log('failed', error);
      res.status(404).send(error);
    })
})






app.delete('/delete', (req, res) => {
  db.glossary.findOne({word: req.body.delete})
    .then((data) => {
      if (!data) {
        throw data
      }
      return db.glossary.deleteOne(data)
    })
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

app.put('/edit', (req, res) => {

  console.log(req.body)



  db.glossary.findOne({word: req.body.word})
    .then((data) => {
      if (!data) {
        throw data;
      }
      return db.glossary.updateOne(data, {$set: {definition: req.body.definition}})
    })
    .then((data) => {
      if (!data) {
        throw data;
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
})





app.listen(port, () => {
  console.log(`Sucessfully running Glossary App server on PORT ${port}`)
})