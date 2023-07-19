function botonesComprar(){
    const arrayBotones = document.querySelectorAll(".btn_comprar");
    console.log("botones categoria escogida:");
    console.log(arrayBotones);
    console.log("cantidad botones:");
    console.log(arrayBotones.length);
    arrayBotones.forEach((btn) => {
      btn.addEventListener("click", () => {
        pelis.push(peliculaDesdeLS("peliculasLS"));
        let pel = pelis.filter((el) => el.id == btn.id);
        console.log(pel);
        /* console.log("Añadiste al carrito la pelicula: "+ pel[0].nombre); */
        Toastify({ //Alerta de pelicula seleccionada
          text: `Añadiste la pelicula: ${pel[0].nombre}`,
          position: "bottom-left",
          className: "mi-toastify",
          offset: {
            x: -30, // Ajusta el desplazamiento horizontal
            y: 20, // Ajusta el desplazamiento vertical
          },
          duration: 1000,   
          }).showToast();
          contenedorCarrito.appendChild(crearItemCompra(pel[0]));
          listaCarrito.push(pel[0]);
          console.log("Lista carrito total:");
          console.log(listaCarrito);
          /* botonesComprar(); */
          console.log(listaCarrito.length);
          //Se guarda carrito en el local
          llenarLocalStorage("carritoLs", listaCarrito);
    
          
  
         
      });
    });
    return listaCarrito;
    
  }

  if (contenedorCarrito!=""){
    const btnEliminarItem= document.querySelectorAll(".carrito-eliminar");
    console.log(btnEliminarItem);
    btnEliminarItem.forEach((btn)=>{
      btn.addEventListener("click", () => {
        
        console.log("tomaaa");
    
    });
    });
  }; 

  https://github.com/maurolores92/Gamming-Store/blob/main/js/menu.js