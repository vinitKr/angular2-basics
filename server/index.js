var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var cors = require('cors');

app.use(cors());

var rootPath = path.normalize(__dirname);
var nodePort = '4000';

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    limit: '25mb'
}));
var router = express.Router();

require("./routes")(app, router);

app.listen(nodePort);
console.log(new Date() + ' Listening on port: ' + nodePort);