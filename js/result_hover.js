$(document).ready(function () {
    var size = $("#result1").css("fontSize");
    var color = $("#result1").css("color");
    $("#result1").hover(
        function () {
            $(this).css("fontSize", "47px");
            $(this).css("color", "#3d5a80");
        },
        function () {
            $(this).css("fontSize", size);
            $(this).css("color", color);
        }
    );
});

$(document).ready(function () {
    var size = $("#start_button").css("fontSize");
    var color = $("#start_button").css("color");
    $("#start_button").hover(
        function () {
            $(this).css("fontSize", "24pt");
            $(this).css("color", "#4a4e69");
        },
        function () {
            $(this).css("fontSize", size);
            $(this).css("color", color);
        }
    );
});