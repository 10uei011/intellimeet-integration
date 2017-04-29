var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('');

mongoose.connection.on("error",(error) => {
  console.log("######error#########",error);
});

mongoose.connection.on("connected",() => {
  console.log("#######connected###########")
});

app.get('/', function (req, res) {
  res.send('Hello Integration !')
});

app.listen(3000, function () {
  console.log('App is running on 3000!')
});