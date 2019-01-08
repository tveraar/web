/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/


window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1000)  {
    document.getElementById("theastro").style.height = "250px";
  } else {
    document.getElementById("theastro").style.height = "";
  }

     if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600)  {
    document.getElementById("theastro").style.height = "220px";
  }

    if  (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200)  {
        document.getElementById("theastro").style.height = "200px";
    }

    if  (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200)  {
        document.getElementById("theastro").style.height = "150px";
    }

    if  (document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900)  {
        document.getElementById("theastro").style.height = "100px";
    }
}


function myFunction(x) {
  if (x.matches || document.body.scrollTop > 300) { // If media query matches
    document.getElementById("theastro").style.height = "10px";
  } else {
    document.body.style.backgroundColor = "5px";
  }
    if (x.matches || document.body.scrollTop > 1000) { // If media query matches
    document.getElementById("theastro").style.height = "40px";
  }
    if (x.matches || document.body.scrollTop > 1500) { // If media query matches
    document.getElementById("theastro").style.height = "100px";
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes









myFunction(x); // Call listener function at run time
scrollFunction();




