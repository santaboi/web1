var choose_map = {
    'left': false,
    'mid': false,
    'right': false
};

$(document).ready(function () {
    /*
    var choose_map = {
        'left': false,
        'mid': false,
        'right': false
    };
    */
    $(".l_buttons, .m_buttons , .r_buttons").click(function () {
        /******************************************************************** */
        if (this.id == 'l_but1' || this.id == 'l_but4'){
            console.log("clicked1!")
            choose_map['left'] ="CF";

            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("COOL FAIR").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but2' || this.id == 'l_but5') {
            console.log("clicked1!")
            choose_map['left'] = "NF";

            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("NEUTRAL FAIR").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but3' || this.id == 'l_but6') {
            console.log("clicked1!")
            choose_map['left'] = "WF";

            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("WARM FAIR").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but7' || this.id == 'l_but10') {
            console.log("clicked1!")
            choose_map['left'] = "CD";


            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("COOL DARK").fadeIn();
            }, 500) )
        }
        else if (this.id == 'l_but8' || this.id == 'l_but11') {
            console.log("clicked1!")
            choose_map['left'] = "ND";

            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("NEUTRAL DARK").fadeIn();
            },500))
        }
        else if (this.id == 'l_but9' || this.id == 'l_but12') {
            console.log("clicked1!")
            choose_map['left'] = "WD";

            $("#skin_staus").fadeOut(setTimeout(function () {
                $("#skin_staus").text("WARM DARK").fadeIn();
            }, 500) )
        }
        else if (this.id == "m_but1") {
            console.log("clicked1!")
            choose_map['mid'] = 'L';

            $("#lips_color").fadeOut(setTimeout(function () {
                $("#lips_color").text("LIGHT").fadeIn();
            },500))
        }
        else if (this.id == "m_but2") {
            console.log("clicked1!")
            choose_map['mid'] = 'O';

            $("#lips_color").fadeOut(setTimeout(function () {
                $("#lips_color").text("ORDINARY").fadeIn();
            }, 500) )
        }
        else if (this.id == "m_but3") {
            console.log("clicked1!")
            choose_map['mid'] = 'D';

            $("#lips_color").fadeOut(setTimeout(function () {
                $("#lips_color").text("DARK").fadeIn();
            }, 500) )
        }
        else if (this.id == "r_but1") {
            console.log("clicked1!")
            choose_map['right'] = 'C';

            $("#lips_condition").fadeOut(setTimeout(function () {
                $("#lips_condition").text("COARSE").fadeIn();
            }, 500) )
        }
        else if (this.id == "r_but2") {
            console.log("clicked1!")
            choose_map['right'] = 'M';

            $("#lips_condition").fadeOut(setTimeout(function () {
                $("#lips_condition").text("MOIST").fadeIn();
            } , 500))
        }
        /******************three button are all clicked*/
        if ((choose_map['left'] !== false) && (choose_map['mid'] !== false) && (choose_map['right'] !== false)) {
            var total_status = choose_map['left'].concat(choose_map['mid'], choose_map['right']);
            console.log(total_status);
            
            if (['CFLM', 'CFOM', 'CFDM', 'CDLM', 'CDOM', 'CDDM'].includes(total_status)){
                /*#10*/
                console.log(total_status, '10success');
                imageUrl = "./source/img/10.jpg"
                $(".item1__").css('background-image', 'url(' + imageUrl + ')');

                var obj = $("#result1").text("ROMAND GLASTING WATER TINT \n #10 CHIJA BEIGE");
                obj.html(obj.html().replace(/\n/g, '<br/>'));

                $("a").prop("href", "https://www.amazon.com.au/ROMAND-Glasting-Water-Hanbok-CHIJA/dp/B08N57W83V")

            }
            else if (['WFLM', 'WFOM', 'WFDM', 'WDLM', 'WDOM', 'WDDM' ].indexOf(total_status) >= 0){
                console.log(total_status, '11success');
                imageUrl = "./source/img/11.jpg"
                $(".item1__").css('background-image', 'url(' + imageUrl + ')');

                var obj = $("#result1").text("ROMAND GLASTING WATER TINT \n #11 PUMPKIN BROWN");
                obj.html(obj.html().replace(/\n/g, '<br/>'));

                $("a").prop("href", "https://www.koinshop.com/product/romand-glasting-water-tint-pumpkin-brown/")
            }
            else if (['NFLM', 'NFOM', 'NFDM', 'NDLM', 'NDOM', 'NDDM',].indexOf(total_status) >= 0) {
                console.log(total_status, '12success');
                imageUrl = "./source/img/12.jpg"
                $(".item1__").css('background-image', 'url(' + imageUrl + ')');

                var obj = $("#result1").text("ROMAND GLASTING WATER TINT \n #12 OMIJA RED");
                obj.html(obj.html().replace(/\n/g, '<br/>'));

                $("a").prop("href", "https://www.amazon.com.au/ROMAND-Glasting-Water-Hanbok-OMIJA/dp/B08N57KWNR?th=1")
            }
            else if (['WFLC', 'WFOC', 'WFDC', 'WDLC', 'WDOC', 'WDDC'].indexOf(total_status) >= 0) {
                console.log(total_status, '22success');
                imageUrl = "./source/img/22.jpg"
                $(".item1__").css('background-image', 'url(' + imageUrl + ')');

                var obj = $("#result1").text("ROMAND ZERO VELVET TINT \n #22 GRAIN NUDE ");
                obj.html(obj.html().replace(/\n/g, '<br/>'));
            }
            else if (['NFDC', 'NDDC'].indexOf(total_status) >= 0) {
                console.log(total_status, '23success');
                imageUrl = "./source/img/23.jpg"
                $(".item1__").css('background-image', 'url(' + imageUrl + ')');

                var obj = $("#result1").text("ROMAND ZERO VELVET TINT \n #23 VINTAGE TAUPE ");
                obj.html(obj.html().replace(/\n/g, '<br/>'));
            }
            else if (['NFLC', 'NFOC' , 'NDLC' , 'NDOC'].indexOf(total_status) >= 0) {
                /*#24*/
                console.log(total_status, '24success');
                imageUrl = "./source/img/24.jpg"
                $(".item1__").css('background-image', 'url(' + imageUrl + ')');

                var obj = $("#result1").text("ROMAND ZERO VELVET TINT \n #24 FADE RED");
                obj.html(obj.html().replace(/\n/g, '<br/>'));
            }
            else if (['CFLC', 'CFOC', 'CFDC', 'CDLC', 'CDOC', 'CDDC'].indexOf(total_status) >= 0) {
                /*#25*/
                console.log(total_status, '25success');
                imageUrl = "./source/img/25.jpg"
                $(".item1__").css('background-image', 'url(' + imageUrl + ')');

                var obj = $("#result1").text("ROMAND ZERO VELVET TINT \n #25 NERD PINK");
                obj.html(obj.html().replace(/\n/g, '<br/>'));
            }
            /*scroll*/ 
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#three").offset().top
            }, 2000);
        }
    })
});