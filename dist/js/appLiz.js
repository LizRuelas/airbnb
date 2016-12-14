var cargarPagina = function() {
	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};
var map;

var json = [
	{
		"latitud" : -12.07411181223991,
		"longitud" : -77.09629180717775,
		"precio" : "$120"
	},

	{
		"latitud" : -12.079986982830766,
		"longitud" : -77.09998252678224,
		"precio" : "$120"
	},

	{
		"latitud" : -12.069075849160106,
		"longitud" : -77.10521819877931,
		"precio" : "$120"
	}
]; 

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon)
    var mapa = document.getElementById('mapa')
    
    var myOptions = {
	    center:latlon,zoom:14,
	    mapTypeId:google.maps.MapTypeId.ROADMAP,
	    mapTypeControl:false,
	    navigationControlOptions:{
	    style: google.maps.NavigationControlStyle.SMALL
	   	}
    };

    map = new google.maps.Map(document.getElementById('mapa'), myOptions);

    var marker = new google.maps.Marker({
    	position:latlon,
    	map:map,
    	title:"You are here!"
    });

    
 };
var funcionError = function (error) {
	console.log(error);
};

var ubicar = function(){
	console.log(json);
	console.log(json.length);
	for (i=0 ; i<json.length ; i++){
				var latX = json[i].latitud;
				var lonX = json[i].longitud;
				json[i].latitud;
				console.log(json[i].longitud);
				console.log(json[i].latitud);
				

				  var latlon = new google.maps.LatLng(latX, lonX)

				  var marker = new google.maps.Marker({
				    position: latlon,
				    map: map,
				    title: 'Hello World!'
				  });
			}
}
	



$(document).ready(function(){
	cargarPagina();
	ubicar();
});