//Atrapar elemento

const h2 = document.querySelector("h2");


console.log("h2 %0", h2)
//Aprende de propiedades y metodos
h2.style.color = "blue";
h2.style.fontSize = "40px";
h2.innerHTML = " hOLA";
function addSize (){
    this.style.fontSize = 
    Number(this.style.fontSize.replace("px", "")) + 10 + "px";
  };
  function removeSive (){
    this.style.fontSize = 
    Number(this.style.fontSize.replace("px", "")) + 10 + "px";
  };
//Aprende a registrar eventos
h2.onmouseover = addSize;
h2.onmouseout = removeSive;
h2.onclick = addSize;

h2.onmouseover = addSize;
h2.onmouseout = removeSive;
h2.onclick = addSize;
  












