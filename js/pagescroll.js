/*$('body,html').scrollTo('#three', { duration: 800 });*/
/*setTimeout(function(){
    window.scrollTo({ left: 0, top: 10000, behavior: "smooth" })
} , 2);*/
function start_scroll(){
    var elmnt = document.getElementById("one");
    elmnt.scrollIntoView({ behavior: 'smooth'});
}
start_scroll();

