/**
 * Created by vico on 13/12/16.
 */
$(document).ready(function(){
    //var authSearch = window.localStorage.getItem("search");



    var result = [];

    var contactTemplate ="<div class='row'>" +
        "<div class='col s10' >"+
        "<ul style='list-style-type:none'>"+
        "<li>{{distrito}}</li>"+
        "<li>{{direccion}}</li>"+
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
        console.log(data);
        var la = $("#la");
        var contenedorData = "";

        $.each(data, function(key, user){
            contenedorData += contactTemplate
                .replace("{{distrito}}", user.distrito)
                .replace("{{direccion}}", user.direccion);
            //.replace("{{email}}", key);
            //console.log(key);
        });

        la.html(contenedorData);

    });

    $(".enviar").click(function(event) {

        var bla = $('.buscar').val();

        departamentos
            .orderByChild('distrito')
            .startAt(bla)
            .endAt(bla+"\uf8ff").on('value', function(response) {

            var data = response.val();

            intersect(data);



            var la = $("#la");
            var contenedorData = "";

            $.each(data, function(key, user){
                contenedorData += contactTemplate
                    .replace("{{distrito}}", user.distrito)
                    .replace("{{direccion}}", user.direccion);
            });

            la.html(contenedorData);

        });

    });

    function intersect(data){
        console.log(data);
    }

});