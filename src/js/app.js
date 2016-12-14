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

  //slider
  var dly = 200;
    $('.exp__content').each(function() { // caring about multi instances
        var el = $(this),
        ul = $('ul', el);
        $('div', el).not('.vewport').click(function() {
            // in case any animation in progress we do nothing
            if( ul.is(':animated') ) return;
            var first = $('li:first', ul),
                last = $('li:last', ul);
            switch( $(this).css('float') ) { // relaying on css floats which might be not the case for complex galleries               
                case 'left':
                    ul.css('left', -last.outerWidth(true)).prepend(last).animate({'left': 0}, dly);
                break;
                case 'right':
                    ul.animate({'left': -first.outerWidth(true)}, dly, function(){
                        $(this).append(first).css('left', 0)
                    });
                break;                
            } // switch construction
        }); // navigation click handler
    }); // each loop
    //slider

});
