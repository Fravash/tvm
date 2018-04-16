$(document).ready(function() {
	$(".example__link").fancybox();

	$(".example__list").slick({
		prevArrow: $(".example__arrow_position_prev"),
		nextArrow: $(".example__arrow_position_next")
	});
});