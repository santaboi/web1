$(document).ready(function () {
    $("#start_button").click(function(){
        $(this).slideUp(500);
        $('#start_text').css('webkit-transition-duration', '0.5s');
        $("#start_text").css('transition-delay', '0.2s');
        $("#start_text").css("color", "#e68f97");
        $("#start_text").css("font-size", "5em");
        /*setTimeout( function(){
        $("#start_text").css("color", "#e68f97");
        $("#start_text").css("font-size" ,"5em");
        },500);*/
    });
});