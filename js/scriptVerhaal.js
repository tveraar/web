/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/


window.onscroll = function() {scrollFunction()};




function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)  {
    document.getElementById("theastro").style.height = "0px";
      document.getElementById("theastro2").style.height = "0px";
  } else {
    document.getElementById("theastro").style.height = "0";
      document.getElementById("theastro2").style.height = "0";
  }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)  {
    document.getElementById("theastro").style.height = "250px";
      document.getElementById("theastro2").style.height = "200px";
  }

     if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600)  {
    document.getElementById("theastro").style.height = "220px";
         document.getElementById("theastro2").style.height = "180px";
  }

    if  (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200)  {
        document.getElementById("theastro").style.height = "200px";
    }

    if  (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200)  {
        document.getElementById("theastro").style.height = "170px";
    }

    if  (document.body.scrollTop > 3900 || document.documentElement.scrollTop > 3900)  {
        document.getElementById("theastro").style.height = "140px";
    }
    if  (document.body.scrollTop > 4600 || document.documentElement.scrollTop > 4600)  {
        document.getElementById("theastro").style.height = "100px";
    }
    if  (document.body.scrollTop > 5200 || document.documentElement.scrollTop > 5200)  {
        document.getElementById("theastro").style.height = "70px";
    }
    if  (document.body.scrollTop > 5900 || document.documentElement.scrollTop > 5900)  {
        document.getElementById("theastro").style.height = "40px";
    }
}



scrollFunction();




