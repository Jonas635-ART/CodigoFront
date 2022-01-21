/*getelementybyid*/
console.log(document.getelementyById("h2"));
/*getelementybytagname*/
const h2s = document.getElementsByTagName("h2");
console.log(document.getElementsByTagName("h2"));
console.log(h2s[0])
console.log(h2s[1])
console.log(h2s[2])
/*querySelector*/
console.log("queryselector por etiqueta", document.querySelector("h2"));
console.log("queryselector por id", document.querySelector("#h2"));
console.log("queryselector por clase", document.querySelector(".h2"));
console.log("queryselector por atributo", document.querySelector("[class='h2']"));

/*queryselectorall*/
console.log("queryselectorall por etiqueta", document.querySelectorAll("h2"));
console.log("queryselectorall por clase", document.querySelectorAll(".h2"));
console.log("queryselectorall por atributo", document.querySelectorAll("[class='h2']"));

/*Atrapando Nodos */
const tituloH2 = document.querySelector("h2");
tituloH2.style.color = "white";
tituloH2.style.fontSize = "40px";
tituloH2.style.backgroundColor = "red";
tituloH2.style.fontFamily = "arial";
/**/ 
function modifyNode(node, properties){
  node.color = properties.color;
  node.fontSize = properties.fontSize;
  node.backgroundColor = properties.backgroundColor;
  node.fontFamily = properties.fontFamily
}
modifyNode(document.querySelector("h1"), {
    color:"blue",
    fontSize:"32px",
    backgroundColor: "yellow",
    fontFamily:"arial",
});
modifyNode(document.querySelector("h2"), {
    color:"blue",
    fontSize:"32px",
    backgroundColor: "yellow",
    fontFamily:"arial",
});
modifyNode(document.querySelector("h3"), {
    color:"blue",
    fontSize:"32px",
    backgroundColor: "yellow",
    fontFamily:"arial",
});
modifyNode(document.querySelector("h4"), {
    color:"blue",
    fontSize:"32px",
    backgroundColor: "yellow",
    fontFamily:"arial",
});

const parrafos = document.querySelectorAll("p")
console.log("parrafos", parrafos)
