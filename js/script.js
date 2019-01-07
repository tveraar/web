/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/


/* laat formulier verschijnen, bron: Rico Zethof */
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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

