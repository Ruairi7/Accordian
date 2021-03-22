
function myFunction(e) {
    var x = e.parentElement;
    var y = x.nextElementSibling;
    
      /*if(y.clientHeight) {
          y.style.height = "0";
          y.style.overflow = "hidden";
          y.style.zIndex = "1";
          
      }else{
          y.style.height = "2rem";
          y.style.overflow = "auto";
          y.style.zIndex = '9';
          
      }*/

      

     if (y.style.maxHeight) {
        y.style.maxHeight = null;
        e.querySelector('img').style.transform = "scale(1.5)";
        e.style.fontWeight = "400";
      } else {
        y.style.maxHeight = y.scrollHeight + "px";
        e.querySelector('img').style.transform = "scaleX(-1.5) scaleY(-1.5)";
        e.style.fontWeight = "700";
      }
    

  }

  


