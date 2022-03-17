$(document).ready(function(){
    $(".l_buttons").click(function () {
        var color = $(this).css("background-color");
        $(".col1").css("background-color", color);
        $(".col1>*").css("background-color" , color);
    })
});

$(document).ready(function () {
    $(".m_buttons").click(function () {
        var color = $(this).css("background-color");
        $(".col2").css("background-color", color);
        $(".col2>*").css("background-color", color);
    })
});

/**********************right one******************************* */
$(document).ready(function () {
    $("#r_but2").click(function () {
        var color = $(this).css("background-color");
        $(".col3").css("background-color", color);
        $(".col3>*").css("background-color", color);
    })
});

$(document).ready(function () {
    $("#r_but1").click(function () {
        var color = $(this).css("background-color");
        $(".col3").css("background-color", color);
        $(".col3>*").css("background-color", color);
    })
});
