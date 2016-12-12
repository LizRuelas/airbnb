$(document).ready(function(){
    var authSearch = window.localStorage.getItem("search");

    

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

        // $(".contactos").click(function(event) {
            
        //     window.localStorage.setItem("destinatario", event.currentTarget.id);
        //      window.location.href = "/payment.html";
        // });


        function initialize() {
          var pyrmont = new google.maps.LatLng(-33.8665, 151.1956);

          var map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15,
            scrollwheel: false
          });

          // Specify location, radius and place types for your Places API search.
          var request = {
            location: pyrmont,
            radius: '500',
            types: ['store']
          };

          // Create the PlaceService and send the request.
          // Handle the callback with an anonymous function.
          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                var place = results[i];
                // If the request succeeds, draw the place location on
                // the map as a marker, and register an event to handle a
                // click on the marker.
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
      }
    }
  });
}

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initialize);
 
    });
});