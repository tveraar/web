/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/


/* Variables */
/* buttons mijn verhalen pagina */
var button = document.querySelector('#laad');
var downloadImg = document.querySelector('#icoon');
var button2 = document.querySelector('#laad2');
var downloadImg2 = document.querySelector('#icoon2');

/* download switch */
var schakelaar = document.getElementById('schakel');

/* download text naast switch */
var text = document.getElementById('downloadtext');


/* + mijn lijst button en afbeelding veranderen */
var plusLijst = document.querySelector('#plus');
var icoon = document.getElementById('bal');

function showWhite() {
    if (plusLijst.classList.contains("paarsButton")) {

        plusLijst.classList.remove("paarsButton");
        plusLijst.classList.add("whiteButton");

    } else {

        plusLijst.classList.remove("whiteButton");
        plusLijst.classList.add("paarsButton");
    }
}




/* form in en uitklappen */
var filterButton = document.getElementById('filter');
var mijnForm = document.getElementById('form');

/* functie haalt class hide weg als die er is en plaatst class show */
function showFilters() {

    if (mijnForm.classList.contains("hide")) {

        mijnForm.classList.remove("hide");
        mijnForm.classList.add("show");

    } else {

        mijnForm.classList.remove("show");
        mijnForm.classList.add("hide");
    }
}


/* verander button 1 */
function change() {
    downloadImg.src = "images/loading.gif";
    downloadImg.style.height = "27px";

}

/* verander button 2 */
function change2() {

     downloadImg2.src = "images/loading.gif";
    downloadImg2.style.height = "27px";

}

/* verander alle buttons door de schakelaar */
function changeAll() {

    downloadImg.src = "images/loading.gif";
    downloadImg.style.height = "27px";

    downloadImg2.src = "images/loading.gif";
    downloadImg2.style.height = "27px";

    text.innerHTML = "Gedownload";
}


function changeLijst() {
      if (plusLijst.classList.contains("paarsButton")) {
    plusLijst.innerHTML = "Bewaard";
    icoon.src = "images/notifi.gif";
    icoon.style.height = "1.4em";
    icoon.style.transition = ".4s";
      }
    else {
        plusLijst.innerHTML = "Mijn lijst";
        icoon.src = "images/download.svg";
    }

}


/* event listeners bij click download pagina */
if (button, button2) {
button.addEventListener('click', change);
button2.addEventListener('click', change2);
schakelaar.addEventListener('click', changeAll);

}
/* event listeners bij click overzichtspagina */
plusLijst.addEventListener('click', changeLijst);
plusLijst.addEventListener('click', showWhite);
filterButton.addEventListener('click', showFilters);

















