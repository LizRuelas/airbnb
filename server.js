var express = require("express");
var app = express();
var request = require('request');


// prepare server
//app.use('/api', api); // redirect API calls
app.use(express.static(__dirname + '/dist')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
//app.use(express.static(__dirname + "/public"));

// ACAAAAAAAAAAAAAAAAAA
app.get('/liz', function (req, res) {

	var bodyResponse = '';	
	request('https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&_limit=1', function (error, response, body) {
		console.log(error);
	  if (!error && response.statusCode == 200) {
	  		console.log(body);
		    bodyResponse = body // Show the HTML for the Google homepage.
		    res.setHeader('Content-Type', 'application/json');
		    res.send(bodyResponse);
		  }
	});
    
})

// ACAAAAAAAAAAAAAAAAAA FIN











































app.listen(3029 , function(){
  console.log("encendido");
});