var express = require("express");
var app = express();

// prepare server
//app.use('/api', api); // redirect API calls
app.use(express.static(__dirname + '/dist')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
//app.use(express.static(__dirname + "/public"));

// ACAAAAAAAAAAAAAAAAAA
app.get('/liz', function (req, res) {
  res.send('hello world')
})

// ACAAAAAAAAAAAAAAAAAA FIN











































app.listen(3029 , function(){
  console.log("encendido");
});