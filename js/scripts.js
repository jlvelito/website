$(document).ready(function(){
	var alto = $(window).height();
	var ancho = $(window).width();

	$(window).scroll(function(){
			// Get container scroll position
			var fromTop = $(this).scrollTop();

			if(fromTop >= 160){
					$('.menu').addClass('activated');
			}else{
					$('.menu').removeClass('activated');
			}

			if(fromTop >= alto-80){
					$('.menu').addClass('black');
			}else{
					$('.menu').removeClass('black');
			}

	});

});
