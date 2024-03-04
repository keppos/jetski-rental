$(".go-to-home").on('click', function() {
    $('html, body').animate({
        'scrollTop': $("header").position().top
    });
});

$(".go-to-booking").on('click', function() {
    $('html, body').animate({
        scrollTop: $(".booking-section").offset().top - 50
    }, 500)
});

$(".go-to-scooters").on('click', function() {
    $('html, body').animate({
        scrollTop: $(".scooter-section").offset().top - 50
    }, 500)
});

$(".go-to-contact").on('click', function() {
    $('html, body').animate({
        scrollTop: $(".contact-section").offset().top - 50
    }, 500)
});

$(".logo").on('click', function() {
    $('html, body').animate({
        'scrollTop': $("header").position().top
    });
});

$(".booking-button").on('click', function() {
    $('html, body').animate({
        scrollTop: $(".booking-section").offset().top - 50
    }, 500)
});
$(".form-button").on('click', function() {
    $("#green").show();
    $(".form-button").hide();
    $(".forminput").hide();


});


// Hamburger menu button

let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(".menu-btn").click(function() {
    $("nav").slideToggle(0);
});


var list = window.matchMedia("(max-width: 1050px)")
hideList(list) // Call listener function at run time
list.addListener(hideList) // Attach listener function on state changes

function hideList(x) {

    if (list.matches && !menuOpen) { // If media query matches
        $("li").click(function() {
            $("nav").slideToggle(0);
            menuBtn.classList.remove('open');
            menuOpen = false;

        });
    } else if (list.matches) { // If media query matches
        $("li").click(function() {
            $("nav").slideToggle(0);
        });
    }

}