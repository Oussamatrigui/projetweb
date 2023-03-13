(function (w) {
	w(".search-wrap button").on("click", function(){
		w(".search-area").addClass("active");
	});
	w(".search-area span.closs-btn ").on("click", function(){
		w(".search-area").removeClass("active");
	});
})(jQuery);
