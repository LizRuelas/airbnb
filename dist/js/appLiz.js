var cargarPagina = function() {
	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};
var map;

var json = [
	["$120", -12.07411181223991, -77.09629180717775],

	["$140",-12.079986982830766,-77.09998252678224],
	
	["$160",-12.069075849160106,-77.10521819877931]
]; 

var funcionExito = function() {
/*	var lat = posicion.coords.latitude;
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
    });*/
    console.log(json);
	console.log(json.length);
	for (i=0 ; i<json.length ; i++){
		
		map = new google.maps.Map(document.getElementById('mapa'), {
			zoom: 14,
	        center: new google.maps.LatLng(-12.079986982830766, -77.09998252678224),
	        mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		 var infowindow = new google.maps.InfoWindow();
		var marker, i;
		for (i = 0; i < json.length; i++) {  
		        marker = new google.maps.Marker({
		          position: new google.maps.LatLng(json[i][1], json[i][2]),
		          map: map
		        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(json[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
		 
	}
    
 };
};
var funcionError = function (error) {
	console.log(error);
};

/*var ubicar = function(){
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
}*/
	

$(document).ready(function(){
	cargarPagina();
});