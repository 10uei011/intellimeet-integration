var express = require('express')
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Integration !')
})

app.listen(3000, function () {
  console.log('App is running on 3000!')
})