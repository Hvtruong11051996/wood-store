$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('top-menu');
        } else {
            $('header').removeClass('top-menu');
        }
    });
});
