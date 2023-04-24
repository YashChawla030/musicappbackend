const userRestController = require('./src/controllers/rest/usersRestController.js');
const musicRestController = require('./src/controllers/rest/musicRestController');
const connectDB = require('./src/model/connect');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var fs = require("fs");

connectDB()

app.use(bodyParser.json())

// here we write all the API paths
app.use('/',userRestController)
app.use('/',musicRestController);
app.use('/music',express.static('music'));

app.get('/', function (req, res) {
    console.log("Howdy msg display")
   res.send('Hawdy, Welcome to my application...');
})

var server = app.listen(8081, function () {
//    var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://localhost:%s", port)
})


module.exports = {app}