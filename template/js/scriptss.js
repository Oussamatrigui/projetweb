(function ($) {
 "use strict";

	/*----------------------------
	 wow js active
	------------------------------ */
	 new WOW().init();
	/*------------- preloader js --------------*/
	$(window).on('load',function() { // makes sure the whole site is loaded
		$('.preloder-wrap').fadeOut(); // will first fade out the loading animation
		$('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
	})
})(jQuery);