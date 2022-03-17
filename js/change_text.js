$(document).ready(function () {
    $(".l_buttons, .m_buttons , .r_buttons").click(function () {
        if (this.id == 'l_but1' || this.id == 'l_but4'){
            console.log("clicked1!")
            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("COOL FAIR").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but2' || this.id == 'l_but5') {
            console.log("clicked1!")
            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("NEUTRAL FAIR").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but3' || this.id == 'l_but6') {
            console.log("clicked1!")
            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("WARM FAIR").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but7' || this.id == 'l_but10') {
            console.log("clicked1!")
            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("COOL DARK").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but8' || this.id == 'l_but11') {
            console.log("clicked1!")
            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("NEUTRAL DARK").fadeIn();
            },500))
        }
        else if (this.id == 'l_but9' || this.id == 'l_but12') {
            console.log("clicked1!")
            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("WARM DARK").fadeIn();
            }, 500) )
        }
        else if (this.id == "m_but1") {
            console.log("clicked1!")
            $("#lips_color").fadeOut(setTimeout(function () {
                $("#lips_color").text("LIGHT").fadeIn();
            },500))
        }
        else if (this.id == "m_but2") {
            console.log("clicked1!")
            $("#lips_color").fadeOut(setTimeout(function () {
                $("#lips_color").text("ORDINARY").fadeIn();
            }, 500) )
        }
        else if (this.id == "m_but3") {
            console.log("clicked1!")
            $("#lips_color").fadeOut(setTimeout(function () {
                $("#lips_color").text("DARK").fadeIn();
            }, 500) )
        }
        else if (this.id == "r_but1") {
            console.log("clicked1!")
            $("#lips_condition").fadeOut(setTimeout(function () {
                $("#lips_condition").text("COARSE").fadeIn();
            }, 500) )
        }
        else if (this.id == "r_but2") {
            console.log("clicked1!")
            $("#lips_condition").fadeOut(setTimeout(function () {
                $("#lips_condition").text("MOIST").fadeIn();
            } , 500))
        }
    })
});

