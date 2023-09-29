$(window).on("load", function() {
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: true,
        directionNav: true,
        prevText: "",
        nextText: "",
        slideshowSpeed: 3000,
        animationSpeed: 1000,
        after: function() {
            // sets active_id to the active slide
            var active_id = $('.flex-active-slide').attr('id');
            //if the active slide is the video slide...
            if (active_id == "slide1") {
                //play the video and pause the slider
                myVideo.play();
                $('.flexslider').flexslider("pause");
                //when the video has ended, go to the next slide and play the slider
                myVideo.onended = function() {
                    $('.flexslider').flexslider("next");
                    $('.flexslider').flexslider("play");
                }
            }
        },
    });


});


$(".projects-slide").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    navText: ["<img src='images/Left-Arrow.svg'>", "<img src='images/Right-Arrow.svg'>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    },
});

$(".clients").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    navText: ["", ""],
    responsive: {
        0: {
            items: 2,
        },
        420: {
            items: 3,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 7,
        },
        1200: {
            items: 7,
        }
    },
});
$(".project-thumb").owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    mouseDrag: false,
    touchDrag: false,
    navText: ["", ""],
    responsive: {
        0: {
            items: 4,
            mouseDrag: true,
            touchDrag: true,
        },

        768: {
            items: 6,
            mouseDrag: true,
            touchDrag: true,
        },
        992: {
            items: 8,
        },
        1200: {
            items: 8,
        }
    },
});

$(".testimonials").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    navText: ["", ""],
    responsive: {
        0: {
            items: 1,
        },
        420: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    },
});


// $(".project").owlCarousel({
//     loop: true,
//     margin: 30,
//     responsiveClass: true,
//     nav: false,
//     dots: false,
//     autoplay: true,
//     smartSpeed: 2000,
//     autoplaySpeed: 1000,
//     autoplayTimeout: 3000,
//     navText: ["", ""],
//     responsive: {
//         0: {
//             items: 1,
//         },
//         420: {
//             items: 1,
//         },
//         768: {
//             items: 1,
//         },
//         992: {
//             items: 1,
//         },
//         1200: {
//             items: 1,
//         }
//     },
// });






$(window).on("load", function() {
    jQuery(".preloader").fadeOut("slow", function() {
        jQuery(this).remove();
    });
    new WOW().init();
});


$(document).ready(function() {

    $('.scroll-icon').click(function() {
        $('html, body').animate({ scrollTop: $("#number-boxes").offset().top }, 'slow');
        return false;
    });

    var email = $('.inp_bg').find('.form');

    email.each(function() {
        $(this).on('blur', function() {
            var labelEmail = $(this).next('.form_field'),
                emailInput = $(this).val();
            if (emailInput != "") {

                $(this).addClass('on-focus');
            } else {

                $(this).removeClass('on-focus');
            }
        });
    });

    

});


$(".menu-icon").click(function() {


    $('.openable-menu').toggleClass('open');
    $(this).toggleClass('change');
    $('.banner, body').toggleClass('menu-opened');

});

var equal_height = $(".equal-height");
if (equal_height.length) {
    equal_height.matchHeight();
}