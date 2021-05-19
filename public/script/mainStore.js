$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('top-menu');
        } else {
            $('header').removeClass('top-menu');
        }

        // if ($(this).scrollTop()) {
        //     $('.back-top').fadeIn();
        // } else {
        //     $('.back-top').fadeOut();
        // }

        // $('.back-top').click(function () {
        //     console.log('back');
        //     $('html, body').animate({ scrollTop: 0 }, 300);
        // })
    });
});
