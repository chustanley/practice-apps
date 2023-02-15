require("dotenv").config();

const path = require("path");

/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

var SRC_DIR = path.join(__dirname, './client/src'); // your index.jsx file

var DIST_DIR = path.join(__dirname, './client/src'); // your bundle file


module.exports = {

  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
         test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  }
};
