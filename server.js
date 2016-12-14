var express = require("express");
var app = express();
//var request = require('request');


// prepare server
//app.use('/api', api); // redirect API calls
app.use(express.static(__dirname + '/dist')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/assets', express.static(__dirname+'/assets'));

var port = process.env.PORT || 3029;

app.listen(port , function(){
  console.log("encendido");
});