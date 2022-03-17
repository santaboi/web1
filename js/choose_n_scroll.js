$("#start_button").click(function () {
    $('html,body').animate({
        scrollTop: $("#three").offset().top
    },
        'slow');
});