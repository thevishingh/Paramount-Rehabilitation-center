(function ($) {
    "use strict";

var windowOn = $(window);
windowOn.on('load',function() {
    $("#loading").fadeOut(500);
});

$(document).ready(function(){

    //=======================================================================
    // Modal Video / Video Popup Plugin Initialize
    //=======================================================================
    $(".video-btn, .blog-video-btn").modalVideo();
    

    //=======================================================================
    // Odometer / Counter Plugin Initialize
    //=======================================================================
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })


    //range slider activation
	$("#shop-slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#shop-amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		},
	});

    //=======================================================================
    // Slider / Swiper Plugin Initialize
    //=======================================================================
    if (jQuery(".slider-active").length > 0) {
        let sliderActive1 = '.slider-active';
        let sliderInit1 = new Swiper(sliderActive1, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: false,

            autoplay: {
                delay: 5000,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-paginations',
                // dynamicBullets: true,
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            a11y: false
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + ' [data-animation]').each(function () {
                    let anim = $(this).data('animation');
                    let delay = $(this).data('delay');
                    let duration = $(this).data('duration');

                    $(this).removeClass('anim' + anim)
                        .addClass(anim + ' animated')
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration
                        })
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass(anim + ' animated');
                        });
                });
            };
            animated();
            // Make animated when slide change
            init.on('slideChange', function () {
                $(sliderActive1 + ' [data-animation]').removeClass('animated');
            });
            init.on('slideChange', animated);
        }

        animated_swiper(sliderActive1, sliderInit1);
    }

    //=======================================================================
    // Gallery Image Popup
    //=======================================================================
    $('.gallery-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 400
		}
	});

    //=======================================================================
    // Testmonial Slider
    //=======================================================================
    $('.clients').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.client-feedback',
    });
    $('.client-feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.clients',
        dots: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        autoplay: true
    });

    //=======================================================================
    // Nice Select
    //=======================================================================
    $('.course__sort-inner select, .panel-body .form-group select').niceSelect();

    //=======================================================================
    // Partner logo Slider
    //=======================================================================
    $('.partner-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
    });

    //=======================================================================
    // Shop details image Slider
    //=======================================================================
    $('.shop-details-lg-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.shop-details-sm-images',
    });
    $('.shop-details-sm-images').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.shop-details-lg-images',
        dots: false,
        arrows: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        prevArrow: '<button class="shop-slick-prev"><i class="icofont-thin-left"></i></button>',
        nextArrow: '<button class="shop-slick-next"><i class="icofont-thin-right"></i></button>'
    });

    //=======================================================================
    // Jquery ui datepicker
    //=======================================================================
    $( "#datepicker" ).datepicker();

    // product quantity
    $('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    //=======================================================================
    // Blog page image Slider
    //=======================================================================
    $('.blog-image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="blog-slider-btn"><i class="icofont-caret-left"></i></button>',
        nextArrow: '<button class="blog-slider-btn btn-next"><i class="icofont-caret-right"></i></button>',
    });

    /*------------------------------------
    Magic Curson
    --------------------------------------*/

    $('.admin-cursor-magic').on('click', function() {
        $('.mouse-cursor-invisible').addClass('visible');
        console.log('magic cursor clicked');
    });
    $('.admin-cursor-default').on('click', function() {
        $('.mouse-cursor-invisible').removeClass('visible');
        console.log('default cursor clicked');
    });

    //=======================================================================
    // Dark Mode
    //=======================================================================
    $('.cinkes-dark-light-view-box').on('click', function() {
        $('body').toggleClass( "dark_mode" );
        $('.cinkes-dark-light-view-box').toggleClass( "has-clicked" );
        $('.cinkes-dark-light-view-toogle-dot').toggleClass( "pos-bottom" );
    });
    

});

})(jQuery);

 // 11. Mouse Custom Cursor
 function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function(s) {
                o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
            $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                    ($(this).is("a", "button") &&
                        $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                        t.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }
}
itCursor();