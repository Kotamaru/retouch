jQuery(document).ready(function ($) {
  
	var slideCount = $('.setings-left-bar .v-slider .setting-row').length;
	var slideWidth = $('.setings-left-bar .v-slider .setting-row').width();
	var slideHeight = $('.setings-left-bar .v-slider .setting-row').height();
	var sliderUlHeight = slideCount * slideHeight;
	
	
	
	$('.setings-left-bar .v-slider').css({ height: sliderUlHeight });
	 

    function moveBot() {
        $('.setings-left-bar .v-slider').animate({
            top: + slideHeight
        }, 300, function () {
            $('.setings-left-bar .v-slider .setting-row:last-child').prependTo('.setings-left-bar .v-slider');
            $('.setings-left-bar .v-slider').css('top', '');
        });
    };

    function moveTop() {
        $('.setings-left-bar .v-slider').animate({
            top: - slideHeight
        }, 300, function () {
            $('.setings-left-bar .v-slider .setting-row:first-child').appendTo('.setings-left-bar .v-slider');
            $('.setings-left-bar .v-slider').css('top', '');
        });
    };

    $('a.control_prev').click(function () {
        moveTop();
    });

    $('a.control_next').click(function () {
        moveBot();
    });

});