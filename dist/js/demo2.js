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
    var address = $('.search').val();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address}, geocodeResult);
});
 
var geocodeResult= function(results, status) {
    if (status == 'OK') {
        var mapOptions = {
            center: results[0].geometry.location,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map($(".mapa").get(0), mapOptions);
        map.fitBounds(results[0].geometry.viewport);
 
        var iconBase1 = "img/";
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

    $("#checkbox-3").click(function(){   
      var features = [];
       var array = busquedaCuartos();
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

    $("#checkbox-4").click(function(){
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
            var iconBase = 'img/';
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

function busquedaDepartamentos() {

    var obj1 = {
        nombreServicio: "Grifo Primax",
        direccion: "Av. Grau 272",
        distrito: "Miraflores",
        horarioAtencion: "24 horas",
        descripcionServicio: "Auto Servicio",
        nombreContacto: "Ángel Rodríguez",
        ubicacion: "Miraflores",
        latitud: -12.123029,
        longitud: -77.027459
    };
    var obj2 = {
        nombreServicio: "Clínica Stella Maris",
        direccion: "Calle José Galvez 893",
        distrito: "Miraflores",
        horarioAtencion: "24 horas",
        descripcionServicio: "Atención Salud",
        nombreContacto: "Raúl Borja",
        ubicacion: "Miraflores",
        url: "www.stellamaris.com.pe",
        latitud: -12.122116,
        longitud: -77.026740
    };
    var obj3 = {
        nombreServicio: "FedEx",
        direccion: "Calle 2 de Mayo 970",
        distrito: "Miraflores",//"Surco",
        horarioAtencion: "9am a 7pm",
        descripcionServicio: "Servicio de Mensajería y Paquetería",
        nombreContacto: "Merly Luna",
        ubicacion: "Miraflores",
        url: "www.fedex.com/do",
        latitud: -12.119651,
        longitud: -77.028618
    };/////////////////////////////////////////hi
    var obj4 = {
        nombreServicio: "Centro de Atención Integral Contra la Violencia Hacia las Mujeres - Warmi Wasi",
        direccion: "Calle 2 de Mayo 864",
        distrito: "Lima",
        horarioAtencion: "9am a 6pm",
        descripcionServicio: "Servicio de Ayuda a la Mujer",
        nombreContacto: "Leila Torres",
        ubicacion: "Miraflores",
        url: "www.munlima.gob.pe/servicios/social/warmi-wasi",
        latitud: -12.123522,
        longitud: -77.037708
    };
    var obj5 = {
        nombreServicio: "Mafisa Motors",
        direccion: "Calle Coronel Inclán 227",
        distrito: "Lima",
        horarioAtencion: "9am a 6pm",
        descripcionServicio: "Servicio Mecánico Automotriz",
        nombreContacto: "Julio Sánchez",
        ubicacion: "San Luis",
        url: "www.mafisamotors.com",
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


function busquedaCasas() {

    var obj1 = {
        nombreProyecto: "Torres de Grau",
        direccion: "Av.Grau 365",
        fechaInicioVenta: "06/12/2016",
        estadoProyecto: "Activo",
        fechaInicioObra: "12/12/2016",
        ubicacion: "Zona Urbana",
        fechaEntrega: "15/12/2017",
        conVista: "",
        empresa: "VivaGyM",
        contacto: "Ing. Víctor Ruiz",
        url: "www.vivagym.com.pe",
        prioridad: "alta",
        tipo: "Construcción",
        responsable: "Ing. Víctor Ruiz",
        nombreContacto: "Ing. Víctor Ruiz",
        precioTotal: 25000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobado",
        latitud: -12.143065,
        longitud: -77.023443
    };
    var obj2 = {
        nombreProyecto: "Torres Pardo",
        direccion: "Calle Francia 715 Miraflores",
        fechaInicioVenta: "13/12/2016",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "01/01/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "13/02/2018",
        conVista: "",
        empresa: "Nakada Inmobiliaria",
        contacto: "Jaime Salcedo",
        url: "www.nakadainmobiliaria.com/portal/",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Rommel Sosa",
        nombreContacto: "Jaime Salcedo",
        precioTotal: 30000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
        latitud: -12.141313,
        longitud: -77.025299
    };
    var obj3 = {
        nombreProyecto: "Condominios LarcoMar",
        direccion: "Jorge Chavez 509",
        fechaInicioVenta: "23/01/2017",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "25/03/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "27/02/2019",
        conVista: "Al Mar",
        empresa: "VivaGyM",
        contacto: "Ing. Víctor Ruiz",
        url: "www.vivagym.com.pe",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Víctor Ruiz",
        nombreContacto: "Ing. Víctor Ruiz",
        precioTotal: 300000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
        latitud: -12.143033,
        longitud: -77.024859
    };
    var obj4 = {
        nombreProyecto: "Condominios Miguel Grau",
        direccion: "Av. Grau 485 Miraflores",
        fechaInicioVenta: "24/01/2017",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "21/03/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "13/02/2019",
        conVista: "",
        empresa: "Nakada Inmobiliaria",
        contacto: "Jaime Salcedo",
        url: "www.nakadainmobiliaria.com/portal/",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Rommel Sosa",
        nombreContacto: "Jaime Salcedo",
        precioTotal: 25000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
        latitud: -12.143877,
        longitud: -77.023969
    };
    var obj5 = {
        nombreProyecto: "Condominios Torres Arica",
        direccion: "Calle Arica 262",
        fechaInicioVenta: "22/01/2017",
        estadoProyecto: "Aprobado",
        fechaInicioObra: "17/03/2017",
        ubicacion: "Zona Urbana",
        fechaEntrega: "16/02/2019",
        conVista: "",
        empresa: "VivaGyM",
        contacto: "Ing. Víctor Ruiz",
        url: "www.vivagym.com.pe",
        prioridad: "Media",
        tipo: "Construcción",
        responsable: "Ing. Víctor Ruiz",
        nombreContacto: "Ing. Víctor Ruiz",
        precioTotal: 230000000,
        estadoEvaluación: "Aprobada",
        estadoDirectorio: "Aprobada",
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

function busquedaCuartos() {

    var obj1 = {
        nombreProyecto: "Torres de Berlín",
        direccion: "Calle Berlín 778",
        empresa: "VivaGyM",
        provincia: "Lima",
        distrito: "Miraflores",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.300 000",
        responsable: "Jorge Luna",
        nombreContacto: "Jorge Luna",
        ubicacion: "Miraflores",
        area: "",
        zonificacion: "",
        costoM2: "S/. 3000",
        precioTotal: "S/. 12 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.vivagym.com.pe",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: -12.120047,
        longitud: -77.037901
    };
    var obj2 = {
        nombreProyecto: "Condominios La Independencia",
        direccion: "Calle Independencia 452",
        empresa: "VivaGyM",
        provincia: "Miraflores",
        distrito: "Miraflores",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.400 000",
        responsable: "Víctor Saenz",
        nombreContacto: "Víctor Saenz",
        ubicacion: "Miraflores",
        area: "",
        zonificacion: "",
        costoM2: "S/. 4000",
        precioTotal: "S/. 16 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.vivagym.com.pe",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: -12.115715,
        longitud: -77.032386
    };
    var obj3 = {
        nombreProyecto: "Condominios Los Ángeles",
        direccion: "Calle José Gálvez 350",
        empresa: "VivaGyM",
        provincia: "Miraflores",
        distrito: "Miraflores",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.400 000",
        responsable: "Sandra Rojas",
        nombreContacto: "Sandra Rojas",
        ubicacion: "Miraflores",
        area: "",
        zonificacion: "",
        costoM2: "S/. 4000",
        precioTotal: "S/. 16 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.vivagym.com.pe",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: -12.121736,
        longitud: -77.033105
    };
    var obj4 = {
        nombreProyecto: "Condominios Cerro Viejo",
        direccion: "Calle Gnrl. Borgoño 351",
        empresa: "Nakada Inmobiliaria",
        provincia: "Breña",
        distrito: "Breña",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.300 000",
        responsable: "Sandra Rojas",
        nombreContacto: "Sandra Rojas",
        ubicacion: "Breña",
        area: "",
        zonificacion: "",
        costoM2: "S/. 3000",
        precioTotal: "S/. 12 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.nakadainmobiliaria.com/portal/",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: -12.116197,
        longitud: -77.033609
    };
    var obj5 = {
        nombreProyecto: "Torres de Nuevo Mundo",
        direccion: "Calle Elías Aguirre 365",
        empresa: "Nakada Inmobiliaria",
        provincia: "Miraflores",
        distrito: "Miraflores",
        prioridad: "Alta",
        tipoConstruccion: "Departamentos",
        tipoDepartamento: "Grande",
        precioEstimado: "S/.400 000",
        responsable: "César Tamariz",
        nombreContacto: "Sandra Rojas",
        ubicacion: "Miraflores",
        area: "",
        zonificacion: "",
        costoM2: "S/. 4000",
        precioTotal: "S/. 16 000 000",
        estadoEvaluacion: "Aprobado",
        estadoDirectorio: "Aprobado",
        url: "www.nakadainmobiliaria.com/portal/",
        numeroCasas: 40,
        numeroPisos: 20,
        numeroViviendaHectarea: "",
        m2VendiblesCliente: 100,
        latitud: -12.116564,
        longitud: -77.034854
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
        nombreTransporte: "Transporte Civa",
        direccion: "Calle Elías Aguirre 419",
        provincia: "Lima",
        distrito: "Miraflores",
        horarioAtencion: "6am a 12am",
        url: "www.civa.com.pe",
        busesDisponibles: 25,
        tiempoEnMercado: "25 años",
        latitud: -12.115735,
        longitud: -77.034758,
    };
    var obj2 = {
        nombreTransporte: "Transporte Flores",
        direccion: "Calle Elías Aguirre 156",
        provincia: "Lima",
        distrito: "Miraflores",
        horarioAtencion: "6am a 12am",
        url: "www.floreshnos.pe",
        busesDisponibles: 27,
        tiempoEnMercado: "30 años",
        latitud: -12.118442,
        longitud: -77.034736
    };
    var obj3 = {
        nombreTransporte: "Transporte Cruz del Sur",
        direccion: "Jr. Jorge Chávez 200",
        provincia: "Lima",
        distrito: "Miraflores",
        horarioAtencion: "6am a 12am",
        url: "www.cruzdelsur.com.pe",
        busesDisponibles: 27,
        tiempoEnMercado: "28 años",
        latitud: -12.119984,
        longitud: -77.036903
    };
    var obj4 = {
        nombreTransporte: "Transporte Cromotex",
        direccion: "Calle Francia 360",
        provincia: "Lima",
        distrito: "Miraflores",
        horarioAtencion: "6am a 12am",
        url: "www.cromotex.com.pe",
        busesDisponibles: 27,
        tiempoEnMercado: "26 años",
        latitud: -12.122260,
        longitud: -77.034553
    };
    var obj5 = {
        nombreTransporte: "Transporte ITTSA",
        direccion: "Libertad 115",
        provincia: "Lima",
        distrito: "Miraflores",
        horarioAtencion: "6am a 12am",
        url: "www.ittsabus.com",
        busesDisponibles: 27,
        tiempoEnMercado: "24 años",
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
