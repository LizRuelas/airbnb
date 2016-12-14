/**
 * Created by vico on 13/12/16.
 */
$(document).ready(function(){
    //var authSearch = window.localStorage.getItem("search");



    var result = {};

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

    var database = firebase.database();

    var departamentos = firebase.database().ref('search/');

    //departamentos.orderByKey().startAt("b").endAt("b\uf8ff").on('value', function(response) {
    departamentos.on('value', function(response) {

        var data = response.val();
        //console.log(data);
        var la = $("#la");
        var contenedorData = "";

        $.each(data, function(key, user){
            contenedorData += contactTemplate
                .replace("{{distrito}}", user.distrito)
                .replace("{{direccion}}", user.direccion)
                .replace("{{tipo}}", user.tipo);
            //.replace("{{email}}", key);
            //console.log(key);
        });

        la.html(contenedorData);

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

    function showResult(){
        var la = $("#la");
        var contenedorData = "";

        $.each(result, function(key, user){
            //console.log(user.tipo);
            contenedorData += contactTemplate
                .replace("{{distrito}}", user.distrito)
                .replace("{{direccion}}", user.direccion)
                .replace("{{tipo}}", user.tipo);
        });

        la.html(contenedorData);
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