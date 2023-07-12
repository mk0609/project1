// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 10) {
        $(".header").addClass("navbar-fixed");
    } else {
        $(".header").removeClass("navbar-fixed");
    }
});

// ========add mobile menu===
var openMenu = document.getElementById('addMenu');
openMenu.addEventListener('click', menuOpen);

function menuOpen() {
    var element = document.getElementById("menu");
    element.classList.add("active");
};
// ========end add menu ===


// ========add mobile menu===
var CloseMenu = document.getElementById('closeMenu');
CloseMenu.addEventListener('click', menuClose);

function menuClose() {
    var element = document.getElementById("menu");
    element.classList.remove("active");
}
// ========end add menu ===

// =====search bar toggle======

var search = document.getElementById('search');
search.addEventListener('click', searchFunction);

function searchFunction() {
    var element = document.getElementById("searchForm");
    element.classList.toggle("active");
}
// ========search end =======
// =======video popup=========
$('.play-video').on('click', function(e) {
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $('#video-overlay').append('<iframe width="996" height="560" src="https://www.youtube.com/embed/yeREIXAKXRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});
$('video-overlay, .video-overlay-close').on('click', function(e) {
    e.preventDefault();
    close_video();
});
$(document).keyup(function(e) {
    if (e.kayCode === 27) {
        close_video();
    }
});

function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// =======video popup=========

// =========banner slider ==
var swiper = new Swiper(".bannerSlider", {
    pagination: {
        el: ".banner-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    speed: 1000,
});
// =========Review slider ==
var swiper = new Swiper(".customer-review", {
    pagination: {
        el: ".review-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    speed: 1000,
});

// =======================customer review home 2 ============
var swiper = new Swiper(".customer-review-second", {
    pagination: {
        el: ".review-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: false,
    speed: 1000,
});

// =======================customer review home 2 ============
var swiper = new Swiper(".productSlider", {
    pagination: {
        el: ".review-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    speed: 1000,
});

// ===============================faq============
// FOR FAQ SECTION ACCORDION
$(function($) {
    var panels = $(".faq__ans").hide();
    panels.first().show();

    $(".faq__que").click(function() {
        var $this = $(this);
        panels.slideUp();
        $this.next().slideDown();
    });
});

$(".faq__que").click(function() {
    $(".faq__que i").addClass("icofont-plus");
    $(this.children[1]).removeClass("icofont-plus");
    $(this.children[1]).addClass("icofont-minus");
});


// ======================some animation add this page==========
AOS.init({
        once: true
    })
    // =======================quantity input ================
    // quantity=========input=============
$(function($) {
    $('.quantity').on('click', '.plus', function(e) {
        let $input = $(this).prev('input.qty');
        let val = parseInt($input.val());
        $input.val(val + 1).change();
    });

    $('.quantity').on('click', '.minus',
        function(e) {
            let $input = $(this).next('input.qty');
            var val = parseInt($input.val());
            if (val > 0) {
                $input.val(val - 1).change();
            }
        });
});
// =============subscription model =======
// ======preloader=======
setTimeout(function() {
        document.getElementById("preloader").style.opacity = "0";
        document.getElementById("preloader").style.visibility = "hidden";
    }, 2000)
    // ============product mixitup init===

// ========pricing section hover effect =============
$(document).ready(function() {
    $(".pricing-row div .pricing-card").mouseover(function() {
        $(".pricing-row div .pricing-card").removeClass('active');
        $(this).addClass('active');
    });
    $(".pricing-row div .pricing-card").mouseout(function() {
        $(".pricing-row div .pricing-card").removeClass('active');
        $(".pricing-row div:nth-child(2) .pricing-card").addClass('active');
    });
});

// =====
$(document).ready(function() {
    $(".pricing-row div").mouseover(function() {
        $(".pricing-row div").removeClass('z-1');
        $(this).addClass('z-1');
    });
    $(".pricing-row div").mouseout(function() {
        $(".pricing-row div").removeClass('z-1');
        $(".pricing-row div:nth-child(2)").addClass('z-1');
    });
});



// ==========message sent ========
$("#alert").click(function() {
    alert("Your Message Has Been Sent!");
});