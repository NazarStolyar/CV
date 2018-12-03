$(document).ready(function() {
    // responsiv full screen
    function heightDetect() {
        $(".main_header").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $("#portfolio_grid").mixItUp();

    $(".s_portfolio li").click(function() {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $('.popup').magnificPopup({type:'image'});
    $('.popup_content').magnificPopup({
        type: 'inline',
        midClick: true
    });

    //animate name
    $('.name').animated('fadeInDown', "fadeOutUp");

    //animate description
    $('.description, .section_header').animated('fadeInUp', "fadeOutDown");

    //start animatet section about
    $('.animated_left').animated('fadeInLeft', 'fadeOutLeft');
    $('.animated_right').animated('fadeInRight', 'fadeOutRight');
    $('.animated_down').animated('fadeInUp', "fadeOutDown");
    //end animated sction about

    $('.left .resum_item').animated("fadeInLeft", "fadeOutDown");
    $('.right .resum_item').animated("fadeInRight", "fadeOutDown");


    // start button animated
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    // start animatet li menu
    $(".top_mnu li a").click(function () {
        $('.top_mnu').fadeOut(600);
        $('.sandwich').toggleClass('active')
    });

	$('.toggle_mnu').click(function () {
	    if ($('.top_mnu').is(":visible")) {
        $('.top_mnu').fadeOut(600);
        $(".top_mnu li a").removeClass('fadeInUp animated')
        } else {
            $('.top_mnu').fadeIn(600);
            $(".top_mnu li a").addClass('fadeInUp animated')
        }
    });
    // end animatet li menu

    // animation logo
    $('.logo_container').animated('rotateIn');

    $('.portfolio_item').each(function (i) {
       $(this).find(".popup_content").attr("href", "#work_" + i);
       $(this).find(".port_descr").attr("id", "work_" + i);
    });

    $("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

    $('.top_mnu ul a').mPageScroll2id();
    $('.animated_left a').mPageScroll2id();


});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});

