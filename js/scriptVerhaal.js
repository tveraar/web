/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true/
/eslint-env browser/
/eslint 'no-console':0*/


window.onscroll = function() {scrollFunction()};




function scrollFunction() {

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)  {
    document.getElementById("theastro").style.height = "0px";
      document.getElementById("theastro2").style.height = "0px";
      document.getElementById("theastro3").style.height = "0px";
  }
    else {
    document.getElementById("theastro").style.height = "0";
      document.getElementById("theastro2").style.height = "0";
        document.getElementById("theastro3").style.height = "0";
  }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)  {
    document.getElementById("theastro").style.height = "250px";
      document.getElementById("theastro2").style.height = "200px";
        document.getElementById("theastro3").style.height = "100px";
        document.getElementById("theastro3").style.marginRight = "5px";
  }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)  {
        document.getElementById("theastro3").style.height = "70px";
  }

     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)  {
        document.getElementById("theastro3").style.height = "60px";
  }


     if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600)  {
    document.getElementById("theastro").style.height = "220px";
         document.getElementById("theastro2").style.height = "180px";
         document.getElementById("theastro3").style.height = "50px";
         document.getElementById("theastro3").style.marginLeft = "15px";
  }

    if  (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200)  {
        document.getElementById("theastro").style.height = "200px";
    }

    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500)  {
        document.getElementById("theastro2").style.height = "160px";
        document.getElementById("theastro3").style.height = "40px";
         document.getElementById("theastro3").style.marginLeft = "25px";
  }
    if  (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200)  {
        document.getElementById("theastro").style.height = "170px";
        document.getElementById("theastro2").style.height = "130px";

    }

    if  (document.body.scrollTop > 3800 || document.documentElement.scrollTop > 3800)  {

         document.getElementById("theastro").style.height = "140px";

        document.getElementById("theastro2").style.height = "110px";

        document.getElementById("theastro3").style.height = "20px";
         document.getElementById("theastro3").style.marginLeft = "30px";
  }

     if  (document.body.scrollTop > 4900 || document.documentElement.scrollTop > 4900)  {

         document.getElementById("theastro").style.height = "100px";

         document.getElementById("theastro2").style.height = "90px";
         document.getElementById("theastro3").style.height = "0px";
         document.getElementById("theastro3").style.marginLeft = "35px";
  }

    if  (document.body.scrollTop > 5200 || document.documentElement.scrollTop > 5200)  {
        document.getElementById("theastro").style.height = "70px";

    }

     if  (document.body.scrollTop > 5900 || document.documentElement.scrollTop > 5900)  {
        document.getElementById("theastro").style.height = "40px";
         document.getElementById("theastro2").style.height = "70px";
    }

    if  (document.body.scrollTop > 6500 || document.documentElement.scrollTop > 6500)  {

        document.getElementById("theastro").style.height = "30px";
         document.getElementById("theastro2").style.height = "50px";

    }

    if  (document.body.scrollTop > 7200 || document.documentElement.scrollTop > 7200)  {
        document.getElementById("theastro").style.height = "20px";
         document.getElementById("theastro2").style.height = "30px";

    }

      if  (document.body.scrollTop > 8000 || document.documentElement.scrollTop > 8000)  {
           document.getElementById("theastro").style.height = "0px";


      }

    if  (document.body.scrollTop > 8200 || document.documentElement.scrollTop > 8200)  {

         document.getElementById("theastro2").style.height = "0px";


}



     }







scrollFunction();




