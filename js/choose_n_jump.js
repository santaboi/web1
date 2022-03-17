const choose_map = new Map();

choose_map.set('left', false);
choose_map.set('mid', false);
choose_map.set('rightt', false);

$(document).ready(function(){
    $(".l_buttons , .m_buttons , .r_buttons").click(function(){
        if (this.id == 'l_but1' || this.id == 'l_but4') {
            choose_map.set('left', "CF");
        }
        else if (this.id == 'l_but2' || this.id == 'l_but5') {
            choose_map.set('left', "NF");
        }
        else if (this.id == 'l_but3' || this.id == 'l_but6') {
            choose_map.set('left', "WF");
        }
        else if (this.id == 'l_but7' || this.id == 'l_but10') {
            choose_map.set('left', "CD");
        }
        else if (this.id == 'l_but8' || this.id == 'l_but11') {
            choose_map.set('left', "ND");
        }
        else if (this.id == 'l_but9' || this.id == 'l_but12') {
            choose_map.set('left', "WD");
        }
        else if (this.id == "m_but1") {
            
        }
        else if (this.id == "m_but2") {
            
        }
        else if (this.id == "m_but3") {
            
        }
        else if (this.id == "r_but1") {
            
        }
        else if (this.id == "r_but2") {
            
        }
    })
    })
});

