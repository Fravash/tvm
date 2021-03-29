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

	$(".card__previews").slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: ".card__list",
		vertical: true,
		verticalSwiping:true,
		focusOnSelect: true,
		prevArrow: $(".card__arrow_prev"),
		nextArrow: $(".card__arrow_next"),
	});

	$(".card__list").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".card__previews"
	});

	$(".header__list-link").hover(function() {
		var self = $(this);
		$(".header__list-link").removeClass("hover");
		$(".header__submenu-wrapper").removeClass("hover");
		self.addClass("hover");
		var index = self.closest(".header__list-item").index();
		self.closest(".header__catalog-menu").find(".header__submenu-wrapper").eq(index).addClass("hover");
	}, function() {});

	$(".header__catalog-menu").hover(function(){}, function() {
		$(".header__list-link").removeClass("hover");
		$(".header__submenu-wrapper").removeClass("hover");
	});

	$(".catalog__filter-link").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		var self = $(this);
		$(".catalog__filter-hint").removeClass("active");
		self.closest('.catalog__filter-item').find(".catalog__filter-hint").addClass("active");
	});

	$(document).click(function(e) {
	    if ($(event.target).closest(".catalog__filter-hint").length) return;
	    $(".catalog__filter-hint").removeClass("active");
	});

	if ($(".catalog__range").length > 0) {
		var self = $(".catalog__range");
		self.slider({
			range: true,
			min: self.attr("data-min"),
			max: self.attr("data-max"),
			values: [ self.attr("data-start"), self.attr("data-finish") ],
			slide: function( event, ui ) {
				$(".catalog__range-input_start").val(ui.values[ 0 ]);
				$(".catalog__range-input_finish").val(ui.values[ 1 ]);
			}
	    });
	}

	$(".card-info__tab-link").click(function(e){
		e.preventDefault();
		var self = $(this);
		$(".card-info__tab").removeClass("active");
		$(".card-info__item").removeClass("active");
		var index = self.closest(".card-info__tab").index();
		self.closest(".card-info__tab").addClass("active");
		$(".card-info__item").eq(index).addClass("active");
	});
	
});