$(document).ready(function() {
	$(".example__link").fancybox();

	$(".example__list").slick({
		prevArrow: $(".example__arrow_position_prev"),
		nextArrow: $(".example__arrow_position_next")
	});

	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 12
        })
        var myPlacemark = new ymaps.Placemark([55.76, 37.64], { 
            hintContent: 'Москва!', 
            balloonContent: 'Столица России' 
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: './images/logo.png',
            // Размеры метки.
            iconImageSize: [198, 37],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-16, -37]
        });

        myMap.geoObjects.add(myPlacemark);
	});
});