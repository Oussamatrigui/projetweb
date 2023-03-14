(function (w) {
	w(".login button").on("click", function(){
		w(".login-box").addClass("active");
	});
	w(".login-box span.closs-btn ").on("click", function(){
		w(".login-box").removeClass("active");
	});
})(jQuery);
