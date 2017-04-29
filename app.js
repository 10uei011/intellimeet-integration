const mongoose = require('mongoose');

const mongoUrl = require('./config/db');

mongoose.connect(mongoUrl.mongoUrl);

mongoose.connection.on("error",(error) => {
  console.log("######error#########",error);
});

mongoose.connection.on("connected",() => {
  console.log('connected to mongodb')
});
