$(document).ready(function() {

	$(".faq__question").click(function() {
		var self = $(this);
		var item = self.closest(".faq__item");
		if (!item.hasClass("faq__item_active")) {
			$(".faq__answer").slideUp(200);
			item.find(".faq__answer").slideDown(200);
			$(".faq__item").removeClass("faq__item_active");
			item.addClass("faq__item_active");
		}
	});

	$(".certificates__list").slick({
		centerMode: true,
		centerPadding: "0",
		slidesToShow: 1,
		variableWidth: true,
		dots: true,
		prevArrow: $(".certificates__arrow_prev"),
		nextArrow: $(".certificates__arrow_next"),
	});

	$(".review__list").slick({
		centerMode: true,
		centerPadding: "0",
		slidesToShow: 1,
		variableWidth: true,
		dots: true,
		prevArrow: $(".review__arrow_prev"),
		nextArrow: $(".review__arrow_next"),
	});

	$(".projects__list").slick({
		centerMode: true,
		centerPadding: "0",
		slidesToShow: 1,
		variableWidth: true,
		dots: true,
		arrows: false
	});

	$(".popular__list").slick({
		infinite: false,
		centerPadding: "0",
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		arrows: false
	});

	$(".category__list").slick({
		infinite: false,
		centerMode: true,
		centerPadding: "0",
		slidesToShow: 1,
		variableWidth: true,
		prevArrow: $(".category__arrow_prev"),
		nextArrow: $(".category__arrow_next"),
	});

	
});