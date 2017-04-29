var express = require('express')
var app = express();

const mongoUrl = require('./config/db');

mongoose.connect(mongoUrl.mongoUrl);

mongoose.connection.on("error",(error) => {
  console.log("######error#########",error);
});

mongoose.connection.on("connected",() => {
  console.log('connected to mongodb')
});

app.listen(3000, function () {
  console.log('App is running on 3000!')
})