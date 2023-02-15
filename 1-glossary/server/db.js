require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://127.0.0.1:27017/glossary');

const glossarySchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String,
});



const wordDef = mongoose.model('wordDef', glossarySchema);





var savingWordDef = (word, definition) => {
  var newWord = new wordDef({
    word: word,
    definition: definition
  })
 return newWord.save();
}






module.exports.savingWordDef = savingWordDef;
module.exports.glossary = wordDef;