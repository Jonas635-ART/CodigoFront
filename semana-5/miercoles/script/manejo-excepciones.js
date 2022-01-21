function ejem1(){
    function suma(a, b){
        if
            (arguments.length > 2) 
            throw console.error("no soporta");
            return a + b;
        }
        console.log(suma(2,3));
        console.log(suma(2, 3, 4, 5, 6));
    }
    ejem1()

    function ejem2(){
        try{  
            const name = prompt("Ingrese nombre");
   if(name.length < 6) {
       throw "SHORT";
   }
   if(name.length > 10) {
       throw"LONG";   
    }
message = "El nombre es correcto;"
}
catch (error) {
    if (error == "SHORT"){
        message = "el name" + nombre + "es muy corto"
    }
    if (error == "LONG"){
        message = "el name" + nombre + "es muy largo"
    }
} finally {
        console.log(message);
    }
}
ejem2();
