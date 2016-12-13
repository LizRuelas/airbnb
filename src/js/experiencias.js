(function(){
	var dly = 200;
	$('.scroll-gal').each(function() { // caring about multi instances
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
})();