var top_show = 150;
var delay = 1000;
$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () {

        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

var home = $('#home').outerHeight();
$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('.wrap').css('top', '0');
        $('.wrap').css('position', 'fixed');
    }
    if ( $(window).scrollTop() <= 44 ){
        $('.wrap').css('top', 'auto');
        $('.wrap').css('position', 'absolute');
    }
});		

$(document).ready(function () {

    $("#navbar").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
			top = $(id).offset().top - 147;
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });

    $(".nav").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),

	top = $(id).offset().top - 147;
    });

/* parallx slider */
$('#scene').parallax();
$("#owl-example").owlCarousel({
   items : 6,
    navigation : true,
    navigationText : ["<",">"],
    rewindNav : true,
    scrollPerPage : true,
	
});

/* end parallx */
});
