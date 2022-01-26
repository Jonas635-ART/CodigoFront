buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 1);

buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 566);


function buscarProducto(arr, id) {
    for(var i = 0; i < 12; i++) {
      if(arr[i].id === id) {
        return arr[i];
      }
    }
  
    return null;
  }

