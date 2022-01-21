let edad= prompt("Ingresa edad");
if(edad > 18){
alert("Bienvenido")    
} else{
   alert("Fuera") 
}

function ejmdos()
{
    let saborhelado = prompt("Sabor de helado");

    if (saborhelado.toUpperCase() == "FRESA") {
        alert("Fresa");
    } else if(saborhelado.toUpperCase() == "MANGO") {
        alert("Mango");
    }else if(saborhelado.toUpperCase() == "PIÑA")  {
        alert("Piña");
    }else {
        alert("No hay");
    }
    console.log("se termino");
} ejmdos();

function callAlert(type){
    return alert("Elegiste un " + type);
}

function ejmtres(){
    let vehiculo = prompt( "Elija su vehiculo");

    console.log(vehiculo)

    switch(vehiculo){
        case "auto": {
            printTypeVehicle("auto");
            break;
        }
    case "moto": {
        printTypeVehicle("moto");
        break;
    }
    
        case "taxi": {
            printTypeVehicle("taxi");
            break;
        }
    default: {
    ejmtres();
    break;
}
    }
 console.log("Se termino ahora")
}
// ejmtres();

function ejmcuatro(){
    const genero = prompt("Ingresa tu genero");
    genero == "m" ? alert("Eres hombre") : alert("Eres mujer");
}
ejmcuatro();
