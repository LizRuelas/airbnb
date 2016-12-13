$(document).ready(function(){
//inicio header
  var scroll_start = 0;
   var startchange = $('#cambio-navbar');
   var offset = startchange.offset();
    if (startchange.length){
     $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".navbar-default").css('background-color', '#FFF');
         } else {
            $('.navbar-default').css('background-color', 'transparent');
         }
     });
    }//fin header

  //Date Picker
  $(".verFecha").datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY'
    });
  //

});