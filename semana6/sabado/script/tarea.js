function addUser() {
   
    function getValues() {
      const values = {
        js_crear_eti: document.querySelector(".js_crear_eti").value,
        js_contenido: document.querySelector(".js_contenido").value,
        js_estilos: document.querySelector(".js_estilos").value,
        js_insertar_eti: document.querySelector(".js_insertar_eti").value,
       
      };
  
      return values;
    }
  
    function makeCard(values) {
      const card = document.createElement("article");
      card.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${values.js_crear_eti} ${values.js_contenido}</h5>
                  <h5 class="card-title">${values.js_estilos}</h5>
                  <h5 class="card-title">${values.js_insertar_eti}</h5>
                  
              </div>
              <button>X</button>
          </div>
      `;
  
      card.classList.add("col", "col-4", "mb-4");
  
      card.querySelector("button").onclick = function () {
        if (confirm("Estas seguro que deseas eliminar esta carta?")) {
          card.remove();
        }
      };
  
      return card;
    }
  
    /*
    Funcion para construir un elemento tipo row
    */
    function makeRow(values) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${values.js_crear_eti} ${values.js_contenido}</td>
          <td>${values.js_estilos}</td>
          <td>${values.js_insertar_eti}</td>
      `;
  
      return tr;
    }
  
    /*
    Agregar elementos nodo en el document
    */
    function addDom(node, container) {
      const app = document.getElementById(container);
      app.appendChild(node);
    }
  
    const form = document.querySelector("form"); // atrapo el formulario
    form.onsubmit = function (event) {
      event.preventDefault();
      addDom(makeCard(getValues()), "app");
      addDom(makeRow(getValues()), "tableBody");
      form.reset();
    }; // registro el evento submit
  }
  
  addUser();