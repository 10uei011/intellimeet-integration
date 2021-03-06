var express = require('express');
var mongoose = require('mongoose');
var app = express();

const mongoUrl = require('./server/config/db');
const net = require('net');
const clientTitle = process.argv[2] || "Client-"+Date.now();
const resource = process.argv[3] || 'meetup';
let startTime = null;

const Buffer = require('buffer');

mongoose.connect(mongoUrl.mongoUrl);

mongoose.connection.on("error",(error) => {
  console.log("######error#########",error);
});

mongoose.connection.on("connected",() => {
  console.log('connected to mongodb')
});

app.listen(3001, function () {
  console.log('App is running on 3001!')
})

const client = net.connect({ip :'10.1.21.104',port: 3000}, () => {
    // 'connect' listener
    console.log(`connected to server! - \nClient Name - ${clientTitle}\nResource - ${resource}` );
    // client.write(JSON.stringify({action: 'subscribe', type: 'fbpost'}));
    startTime = Date.now();
    setTimeout(() => {
        client.write(JSON.stringify({action: 'subscribe', type: resource}));
    }, 1000);

    setTimeout(() => {
        client.write(JSON.stringify({action: 'subscribe', type: 'tweet'}));
    }, 2000);
});

let counter = 0;
client.on('data', (data) => {
    console.log(data.toString());
    counter++;
});
client.on('end', () => {
    console.log(`${counter} events captured in ${Date.now() - startTime}`);
    console.log('')
    console.log('disconnected from server');
});