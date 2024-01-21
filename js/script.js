/*������ �� ����*/

var top_show = 150; // � ����� ��������� ������ ��������� �������� ����� ������ "������"
var delay = 1000; // �������� ���������
$(document).ready(function () {
    $(window).scroll(function () { // ��� ��������� �������� � ��� �������
        /* � ����������� �� ��������� ������ ��������� � �������� top_show, �������� ��� ��������� ������ "������" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // ��� ����� �� ������ "������" �������� � ��� �������
        /* ������� ��������� ������ */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

/* ����� ������ �� ����*/

var home = $('#home').outerHeight();
$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
        $('.wrap').css('top', '0');
        $('.wrap').css('position', 'fixed');
    }
    if ( $(window).scrollTop() <= 44 ){
        //  $('.menuTop').css('', '0');
        $('.wrap').css('top', 'auto');
        $('.wrap').css('position', 'absolute');
      

		
    }
});		
	

//��� slideTop  ����� fade
//$('.carousel').carousel(); 


/*������� �������� �� ������*/

$(document).ready(function () {

    $("#navbar").on("click", "a", function (event) {
        //�������� ����������� ��������� ������� �� ������
        event.preventDefault();

        //�������� ������������� ���� � �������� href
        var id = $(this).attr('href'),

		//������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
			top = $(id).offset().top - 147;

        //��������� ������� �� ���������� - top �� 1500 ��
        $('body,html').stop().animate({ scrollTop: top }, 1000);
    });

    $(".nav").on("click", "a", function (event) {
        //�������� ����������� ��������� ������� �� ������
        event.preventDefault();

        //�������� ������������� ���� � �������� href
        var id = $(this).attr('href'),

		//������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
			top = $(id).offset().top - 147;

        //��������� ������� �� ���������� - top �� 1500 ��
        //$('body,html').animate({scrollTop: top}, 1000);
    });


    /*����� ������� �������� �� ������*/

var map;
var mapCoordinates = new google.maps.LatLng(32.166661, 34.844505);

function initialize() {
    var mapOptions = {
        backgroundColor: "#ffffff", // ���� ����
        zoom: 8, // �������
        disableDefaultUI: true,
        draggable: true,
        scrollwheel: false,
        center: mapCoordinates,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //----------- ����� ----------
        styles: [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 60 }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "stylers": [{ "visibility": "on" }, { "lightness": 30 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ef8c25" }, { "lightness": 40 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#b6c54c" }, { "lightness": 40 }, { "saturation": -40 }] }, {}]
        //------------����� --------------
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

/*parallx slider*/
$('#scene').parallax();
$("#owl-example").owlCarousel({
   items : 6,
    navigation : true,
    navigationText : ["<",">"],
    rewindNav : true,
    scrollPerPage : true,
	
});

/*end pa});rallx*/
});