/**
 * Created by vico on 13/12/16.
 */

var cargarPagina = function() {
    if (navigator.geolocation) { 
        // también se puede usar if ("geolocation" in navigator) {}
        navigator.geolocation.getCurrentPosition(showResult, funcionError);
    }
};

var funcionError = function (error) {
    console.log(error);
};

var contactTemplate ="<div class='row'>" +
        "<div class='col s10' >"+
        "<ul style='list-style-type:none'>"+
        "<li>{{distrito}}</li>"+
        "<li>{{direccion}}</li>"+
        "<li>{{tipo}}</li>"+
        "</ul>"+
        "</div>"+
        "<div class='col s2'>"+
        "<a class='contactos' id='{{email}}'><i class='material-icons'>keyboard_arrow_right</i></a>"+
        "</div>" +
        "</div>";


var result = {};

$(document).ready(function(){
    //var authSearch = window.localStorage.getItem("search");
    cargarPagina();

    var database = firebase.database();

    var departamentos = firebase.database().ref('search/');

    //departamentos.orderByKey().startAt("b").endAt("b\uf8ff").on('value', function(response) {
    departamentos.on('value', function(response) {

        var data = response.val();
        //console.log(data);
        result = data;
        showResult();

    });

    $(".enviar").click(function(event) {

        result = {};

        // filtrar por nombre
        var bla = $('.buscar').val();

        departamentos
            .orderByChild('distrito')
            .startAt(bla)
            .endAt(bla+"\uf8ff").on('value', function(response) {
            var data = response.val();;
            result = data;
            showResult();

        });
        //

        //filtrar por tipo
        var tipoHabitacion = $("#checkbox1");
        if(tipoHabitacion.is(":checked") == true){
            departamentos
            .orderByChild('tipo')
            .equalTo('habitacion-privada').on('value', function(response) {
                var data = response.val();
                result = getDataIntersection(data,result);
                showResult();
            });
        }
        //

        var tipoHabitacion = $("#checkbox2");
        if(tipoHabitacion.is(":checked") == true){
            departamentos
            .orderByChild('tipo')
            .equalTo('habitacion-compartida').on('value', function(response) {
                var data = response.val();
                console.log(data);
                result = getDataIntersection(data,result);
                showResult();
            });
        }
        //

        //filtrar por tipo
        var tipoHabitacion = $("#checkbox3");
        if(tipoHabitacion.is(":checked") == true){
            departamentos
            .orderByChild('tipo')
            .equalTo('casa-entera').on('value', function(response) {
                var data = response.val();

                result = getDataIntersection(data,result);

                showResult();
            });
        }
        //


    });

    function intersect(data){
        $.each(data, function(index, value) {
            if( result[index] === undefined ) {
                result[index] = value;
            }
        });
    }

    

    function intersection(o1, o2) {
        return Object.keys(o1).concat(Object.keys(o2)).sort().reduce(function (r, a, i, aa) {
            if (i && aa[i - 1] === a) {
                r.push(a);
            }
            return r;
        }, []);
    }

    function intersections(o1, o2) {
        return Object.keys(o1).filter({}.hasOwnProperty.bind(o2));
    }

    function getDataIntersection(o1, o2){
        data = intersections(o1, o2);
        returndata = {};
        if(typeof data == 'string'){
            returndata[data]=o2[data];
            return returndata;
        }else{
           data.forEach(function(entry) {
                returndata[entry]=o2[entry];
            }); 

            return returndata;
        }
    }

    

});

function showResult(){
        var la = $("#la");
        var contenedorData = "";
        console.log(result);


        map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 14,
            center: new google.maps.LatLng(-12.079986982830766, -77.09998252678224),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        $.each(result, function(key, user){
            //console.log(user.tipo);
            contenedorData += contactTemplate
                .replace("{{distrito}}", user.distrito)
                .replace("{{direccion}}", user.direccion)
                .replace("{{tipo}}", user.tipo);


            //pintar markdores
            var infowindow = new google.maps.InfoWindow();
            marker = new google.maps.Marker({
                  position: new google.maps.LatLng(user.latitud, user.longitud),
                  map: map
                });
                google.maps.event.addListener(marker, 'click', (function(marker, key) {
                  return function() {
                    infowindow.setContent(user.precio);
                    infowindow.open(map, marker);
                  }
                })(marker, key));

        });

        la.html(contenedorData);
    }