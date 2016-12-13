var firstPosition = undefined;
var load = function() {
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(cargaExitosa, error);
    }
};

var cargaExitosa = function(posicion) {
    var lat = posicion.coords.latitude;
    var lon = posicion.coords.longitude;
    var latlon = new google.maps.LatLng(lat, lon);
    firstPosition = latlon;
    var mapa = document.getElementById('mapa')
    var myOptions = {
        center:latlon,zoom:14,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        mapTypeControl:false,
        zoomControl:false,
        streetViewControl:false,
    };
    var mostrarMap = new google.maps.Map(document.getElementById('mapa'), myOptions);

  //   var iconBase = "img/";
  //   var marker = new google.maps.Marker({
  //   position: latlon,
  //   map: mostrarMap,
  //   icon: iconBase + 'user.png'
  // });
};

var error = function (error) {
     console.log(error);
};

$('.search1').on('click', function() {

    var address = $('#buscar').val();
    console.log(address);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address}, geocodeResult);
});
 
var geocodeResult= function(results, status) {
    if (status == 'OK') {
        var mapOptions = {
            center: results[0].geometry.location,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map($("#mapa").get(0), mapOptions);
        map.fitBounds(results[0].geometry.viewport);
        var iconBase1 = "../assets/img/";
        var markerOptions = { position: results[0].geometry.location, icon: iconBase1 + 'radius.png' }
        var marker = new google.maps.Marker(markerOptions);
        marker.setMap(map);
        /*posisiciones exactas*/
    } else {
        alert("Geocoding no tuvo éxito debido a: " + status);
    }
    $("#checkbox-1").click(function(){
      var features = [];
       var array = busquedaDepartamentos();
       var mapOptions = {
            zoom: 15,
            center:  new google.maps.LatLng(firstPosition.lat(), firstPosition.lng())
       };
       var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
       $.each(array, function (index, value) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value.latitud, value.longitud),
            map: map,
            clickable: false,
            content: 'Map Marker',
            markerOffset: new google.maps.Point(0,20)
        });
        console.log("paso" + index);
       });     
    });

    $("#checkbox-2").click(function(){ 
      var features = [];
       var array = busquedaCasas();
       var mapOptions = {
            zoom: 14,
            center:  new google.maps.LatLng(firstPosition.lat(), firstPosition.lng())
       };
       var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
        
       $.each(array, function (index, value){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value.latitud, value.longitud),
            map: map,
            clickable: false,
            content: 'Map Marker',
            markerOffset: new google.maps.Point(0,4)
        });
        console.log("paso" + index);
       });
    });

    $("#checkbox-3").click(function(){   
      var features = [];
       var array = busquedaCuartosCompartidos();
       var mapOptions = {
            zoom: 16,
            center:  new google.maps.LatLng(firstPosition.lat(), firstPosition.lng())
       };
       var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
        
       $.each(array, function (index, value) {
        
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value.latitud, value.longitud),
            map: map,
            clickable: false,
            content: 'Map Marker',
            markerOffset: new google.maps.Point(0,4)
        });

        console.log("paso" + index);

       });
    });

    function addMarker(feature) {
        var iconBase = '../asssets/img/';
        var icons = {
          parking: {
            icon: iconBase + 'circulo.png'
          }
        };
        var map1 = new google.maps.Map(document.getElementById('mapa'));
      // map = new google.maps.Map(document.getElementById('mapa'),
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map1
      });
    }

}

$(document).ready(load);

function busquedaCasas() {
    var obj1 = {
        direccion: "Av.Grau 365",
        distrito: "Barranco",
        fechaInicio: "06/12/2016",
        fechaSalida: "06/12/2017",
        contacto: "Víctor Ruiz",
        baños: "3",
        cuartos: "6",
        precioTotal: 25000000,
        television : "si",
        piscina: "si",
        latitud: -12.143065,
        longitud: -77.023443
    };
    var obj2 = {
        direccion: "Calle Francia 715",
        distrito: "Barranco",
        fechaInicio: "13/12/2016",
        fechaSalida: "01/01/2017",
        contacto: "Jaime Salcedo",
        baños: "3",
        cuartos: "6",
        precioTotal: 30000000,
        television : "si",
        piscina: "no",
        latitud: -12.141313,
        longitud: -77.025299
    };
    var obj3 = {
        direccion: "Jorge Chavez 509",
        distrito: "Barranco",
        fechaInicio: "13/12/2016",
        fechaSalida: "01/01/2017",
        contacto: "Víctor Ruiz",
        baños: "3",
        cuartos: "8",
        precioTotal: 300000000,
        television : "si",
        piscina: "no",
        latitud: -12.143033,
        longitud: -77.024859
    };
    var obj4 = {
        direccion: "Av. Grau 485",
        distrito: "Barranco",
        fechaInicio: "13/12/2016",
        fechaSalida: "01/01/2017",
        contacto: "Jaime Salcedo",
        baños: "3",
        cuartos: "6",
        precioTotal: 25000000,
        television : "si",
        piscina: "no",
        latitud: -12.143877,
        longitud: -77.023969
    };
    var obj5 = {
        direccion: "Calle Arica 262",
        distrito: "Barranco",
        fechaInicio: "13/12/2016",
        fechaSalida: "01/01/2017",
        baños: "3",
        cuartos: "6",
        contacto: "Ing. Víctor Ruiz",
        precioTotal: 230000000,
        television : "si",
        piscina: "no",
        latitud: -12.143085,
        longitud:  -77.022649
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};

function busquedaDepartamentos() {
    var obj1 = {
        fechaInicio: "06/12/2016",
        fechaSalida: "06/12/2017",
        direccion: "Av. Grau 272",
        distrito: "Miraflores",
        cuartos: "2",
        baños: "3",
        contacto: "Ángel Rodríguez",
        latitud: -12.123029,
        longitud: -77.027459
    };
    var obj2 = {
        fechaInicio: "06/12/2016",
        fechaSalida: "06/12/2017",
        direccion: "Calle José Galvez 893",
        distrito: "Miraflores",
        cuartos: "2",
        baños: "3",
        contacto: "Raúl Borja",
        latitud: -12.122116,
        longitud: -77.026740
    };
    var obj3 = {
        fechaInicio: "06/12/2016",
        fechaSalida: "06/12/2017",
        direccion: "Calle 2 de Mayo 970",
        distrito: "Miraflores",//"Surco",
        cuartos: "2",
        baños: "3",
        contacto: "Merly Luna",
        latitud: -12.119651,
        longitud: -77.028618
    };
    var obj4 = {
        fechaInicio: "06/12/2016",
        fechaSalida: "06/12/2017",
        direccion: "Calle 2 de Mayo 864",
        distrito: "Lima",
        cuartos: "2",
        baños: "3",
        contacto: "Leila Torres",
        latitud: -12.123522,
        longitud: -77.037708
    };
    var obj5 = {
        fechaInicio: "06/12/2016",
        fechaSalida: "06/12/2017",
        direccion: "Calle Coronel Inclán 227",
        distrito: "Lima",
        cuartos: "2",
        baños: "3",
        contacto: "Julio Sánchez",
        latitud: -12.123270,
        longitud: -77.028746
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};

function busquedaCuartosCompartidos() {
    var obj1 = {
        direccion: "Calle Elías Aguirre 419",
        distrito: "Lince",
        huespedes: "6",
        baños: 2,
        latitud: -12.115735,
        longitud: -77.034758
    };
    var obj2 = {
        direccion: "Calle Elías Aguirre 156",
        provincia: "Lima",
        distrito: "Lince",
        huespedes: "6",
        baños: 3,
        latitud: -12.118442,
        longitud: -77.034736
    };
    var obj3 = {
        direccion: "Jr. Jorge Chávez 200",
        provincia: "Lima",
        distrito: "Lince",
        huespedes: "6",
        baños: 1,
        latitud: -12.119984,
        longitud: -77.036903
    };
    var obj4 = {
        direccion: "Calle Francia 360",
        provincia: "Lima",
        distrito: "Lince",
        huespedes: "6",
        baños: 2,
        latitud: -12.122260,
        longitud: -77.034553
    };
    var obj5 = {
        direccion: "Libertad 115",
        provincia: "Lima",
        distrito: "Lince",
        huespedes: "6",
        baños: 2,
        latitud: -12.120403,
        longitud: -77.032686
    };

    var Array = [];
    Array.push(obj1);
    Array.push(obj2);
    Array.push(obj3);
    Array.push(obj4);
    Array.push(obj5);

    return Array;
};
