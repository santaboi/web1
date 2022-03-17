const start_button = document.getElementById('start_button');

start_button.addEventListener('click', function onClick(event) {
    setTimeout(function jump() {
        var elmnt = document.getElementById('two');
        elmnt.scrollIntoView({ behavior: 'smooth' });
    }, 770);
});


/*
function start_scroll() {
    var elmnt = document.getElementById("one");
    elmnt.scrollIntoView({ behavior: 'smooth' });
}
*/