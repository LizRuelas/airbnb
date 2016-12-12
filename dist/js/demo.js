$(document).ready(function(){
    //var authSearch = window.localStorage.getItem("search");

    

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
    departamentos.orderByChild('distrito').startAt("M").endAt("M\uf8ff").on('value', function(response) {

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

        // $(".contactos").click(function(event) {
            
        //     window.localStorage.setItem("destinatario", event.currentTarget.id);
        //      window.location.href = "/payment.html";
        // });
 
    });
});