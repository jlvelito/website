$(document).ready(function(){
	var alto = $(window).height();
	var ancho = $(window).width();

	$(function () {
	    function handler1() {
				var iconElement = document.getElementById('fa');
				var options = {
						from: 'fa-bars',
						to: 'fa-close',
						animation: 'rotateClockwise'
				};

				iconate(iconElement, options);
				$('.menu__lista').addClass('activated');
	        $(this).one("click", handler2);
	    }
	    function handler2() {
				var iconElement = document.getElementById('fa');
				var options = {
						from: 'fa-close',
						to: 'fa-bars',
						animation: 'rotateAntiClockwise'
				};

				iconate(iconElement, options);
				$('.menu__lista').removeClass('activated');
	        $(this).one("click", handler1);
	    }
	    $("#fa").one("click", handler1);
	});


	function validate(evt) {
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var regex = /[0-9]|\./;
		if( !regex.test(key) ) {
			theEvent.returnValue = false;
			if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}

	$('#celular').on('keypress',function(){
		validate(event);
	});

	/* mailjs script */

		$('#sendMail').on('click',function(event){
			event.preventDefault();
			var name = $('#name').text();
			var correo = $('#correo').text();
			var Celular = $('#celular').text();
			var service_id = 'gmail';
			var template_id = 'template_kIHAs8O2';
			var template_params = {
			from_name: name,
			reply_email: correo,
			message_html: Celular
			};
			function validateEmail(correo) {
			  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			  return re.test(correo);
			}

			if(name==''){
 			 $('#nonombre').addClass('active');
 			 setTimeout(function(){
 				 $('#nonombre.active').addClass('show');
 			 },100);
		 }else if(correo==''){
			 $('.alert').removeClass('active');
			 $('.alert').removeClass('show');
			 $('#nocorreo').addClass('active');
 			 setTimeout(function(){
 				 $('#nocorreo.active').addClass('show');
 			 },100);
		 }else if(!validateEmail(correo)){
			 $('.alert').removeClass('active');
			 $('.alert').removeClass('show');
			 $('#malcorreo').addClass('active');
				setTimeout(function(){
					$('#malcorreo.active').addClass('show');
				},100);
		 }else{
			 $('.alert').removeClass('active');
			 $('.alert').removeClass('show');
			 emailjs.send(service_id,template_id,template_params);
			 $('#visible').addClass('oculted');
			 setTimeout(function(){
				 $('#visible').text('Hey! Gracias por escribirme, me estaré comunicando en breve contigo, tú teléfono suena? ese soy yo!! atiende!!');
				 $('#visible').removeClass('oculted');
			 },600);
			 $('#sendMail').addClass('hidden');
			 setTimeout(function(){
				 $('#sendMail').addClass('close');
			 },600);
		 }

		});


		if($('.container__svg').length){
			var svg4 = new Walkway({
				selector: '#animation',
				duration: 2500
			}).draw();
		}


	/* mailjs script */

	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
		img.setAttribute('src', img.getAttribute('data-src'));
		img.onload = function() {
			img.removeAttribute('data-src');
		};
	});

	$('.alert span.fa').on('click',function(){
		$(this).parent().removeClass('show');
		$(this).parent().removeClass('active');
	});


	var flag1 = true;
	var flag2 = true;

	$(window).scroll(function(){
			// Get container scroll position
			var fromTop = $(this).scrollTop();
			var fromTop2 = $('#animation2').offset().top - alto + 50;
			var fromTop3 = $('#animation3').offset().top - alto + 50;

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

			if(fromTop>=fromTop2){
				if(flag1){
					if($('.container__svg__mini').length){
						var svg5 = new Walkway({
							selector: '#animation2',
							duration: 1500
						}).draw();
					}
				}
				flag1 = false;
			}

			if(fromTop>=fromTop3){
				if(flag2){
					if($('.container__svg__mini').length){
						var svg6 = new Walkway({
							selector: '#animation3',
							duration: 1500
						}).draw();
					}
				}
				flag2 = false;
			}

	});

});
