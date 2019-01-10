/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/


/* laat formulier verschijnen, bron: Rico Zethof */
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

var button = document.querySelector('#laad');
var downloadImg = document.querySelector('#icoon');

var button2 = document.querySelector('#laad2');
var downloadImg2 = document.getElementById('icoon2');
var schakelaar = document.getElementById('schakel');

var text = document.getElementById('downloadtext');


function change() {
    downloadImg.src = "images/loading.gif";
    downloadImg.style.height = "27px";

}

function change2() {

     downloadImg2.src = "images/loading.gif";
    downloadImg2.style.height = "27px";

}

function changeAll() {

    downloadImg.src = "images/loading.gif";
    downloadImg.style.height = "27px";

    downloadImg2.src = "images/loading.gif";
    downloadImg2.style.height = "27px";

    text.innerHTML = "Gedownload";
}

if (button, button2) {
button.addEventListener('click', change);
button2.addEventListener('click', change2);
schakelaar.addEventListener('click', changeAll);
}



/* laat formulier verschijnen, bron: Rico Zethof */
if (w < 1950) {
    document.getElementById("form").style.display = "none";
}



function showFilters() {
    var x = document.getElementById("form");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



document.getElementById("filter").addEventListener("click", showFilters);


    ('hide').click(function() {
        (this).addClass("pullDown");
    });

//$(document).scroll(function() {
 // navbarScroll();
//});











