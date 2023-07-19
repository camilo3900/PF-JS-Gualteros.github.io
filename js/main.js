/* Llamado de contenedores y declaracion de variables */
const contenedor = document.querySelector('#principal');
const buttonCategorias = document.querySelector(".dropdown-menu");
const contenedorCarrito= document.querySelector('#grid-container-carrito')
const buscar= document.querySelector('#boton_buscar');
const inputBusqueda= document.querySelector('#campo');
const boton=document.querySelector(".btn");
let productosCarrito=[];/* Array de carrito */
const botonComprar= document.querySelector('#comprarTodo');
const botonVaciar = document.querySelector('#eliminarTodo');
const pagar= document.querySelector('.totalPagar');
let pelis=[];/* Array que se llena con peliculas del ls */
/* Se crea un array de categorias */
llenarLocalStorage('peliculasLS', peliculasJSON);
let listaCarrito=[];
const listaCategorias = [
  "Todas las Categorias",
  "Accion",
  "Aventura",
  "Comedia",
  "Guerra",
  "Infantil",
  "Terror",
];
/* Pantalla de espera */
/* Llamamos a la funcion consumir json y guardar en el localStorage */

botonesComprar();
function crearItemsCarrito(){
  console.log(traerDatos('pelisCarrito'));
  for (const el of traerDatos('pelisCarrito')) {
      cargarProductos(traerDatos('pelisCarrito'))
      const item=crearItemCompra(el);
      contenedorCarrito.appendChild(item);     
  }
  botonesEliminar()
  botonesEditar()
}
function botonesEditar(){
  const edit = document.querySelectorAll(".carrito-editar");
  console.log(edit);
  edit.forEach((btn) => {
      
    btn.addEventListener("click", () => {
     const control = document.querySelector('.cantidad-modificador');
     console.log("hiciste click");

    control.style.visibility= "hidden";
})
})


}
function botonesEliminar(){
    
  const remove = document.querySelectorAll(".carrito-eliminar");
  remove.forEach((btn) => {
      
    btn.addEventListener("click", () => {
      cargarProductos(traerDatos('pelisCarrito'));
      /* productosCarrito.push(traerDatos('pelisCarrito')); */
      console.log("pelicula eliminada:"+cargarProductos(traerDatos('pelisCarrito')));
      let peli = productosCarrito.find((el) => el.id == btn.id);

      let peliTotal= productosCarrito.filter((el)=>el.id !=peli.id);
      guardarLocal('pelisCarrito', peliTotal);
      contenedorCarrito.innerHTML="";
      Swal.fire(
          'Operacion Exitosa',
          `Has eliminado la pelicula: ${peli.nombre}`,
          'success'
        )
        crearItemsCarrito();
        const pagarlo=  traerDatos('pelisCarrito').reduce((acc, producto) => {
          return acc + producto.precio;
        }, 0);
        guardarLocal("totalPago", pagarlo);
        pagar.innerHTML= `$${pagarlo}`;
        
       
})


})
}
/* Botones Comprar de cards peliculas */
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
      console.log(pel[0].nombre);
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

        console.log(listaCarrito.length);
        //Se guarda carrito en el local
        llenarLocalStorage("pelisCarrito", listaCarrito);
       /* Aqui se llama la funcion eliminar pelicula */    
    botonesEliminar()
    const pagarlo=  traerDatos('pelisCarrito').reduce((acc, producto) => {
      return acc + producto.precio;
    }, 0);
    guardarLocal("totalPago", pagarlo);
    pagar.innerHTML= `$${pagarlo}`;
    });
  });
  return listaCarrito;
  
}


for (const cate of listaCategorias) {
  /*Se recorre la lista para generar los li de categorias */
  const item = document.createElement("li");
  const categoria = document.createElement("a");
  categoria.textContent = cate; //Cada opcion del select toma el nombre de cada categoria
  categoria.classList.add("dropdown-item"); //Se le agrega una clase a la etiqueta a
  item.appendChild(categoria);
  buttonCategorias.appendChild(item);
  //Evento onclick para cada opcion del SELECT categoria
  categoria.onclick = () => {
    contenedor.innerHTML = "";//Se vacia el contenedor de peliculas
    const image = imagenCarga();
    contenedor.appendChild(image);
    boton.innerText = cate; //Se reemplaza nombre del SELECT por categoria escogida
    let peliculasFiltradasCategoria = [];
    for (const peli of buscaCategoria(peliculaDesdeLS("peliculasLS"), cate)) {
      /* Aqui va el friltrado por genero */
      peliculasFiltradasCategoria.push(peli);
    }
    carga(true, peliculasFiltradasCategoria, image);
    switch (boton.innerText) {
      case "Comedia":
        contenedor.removeChild(image);
        contenedor.innerHTML = `<h3>lo sentimos, no hay peliculas de esta Categoria</h3>`;
        break;
      case "Todas las Categorias":
        contenedor.removeChild(image);
        peliculaDesdeLS("peliculasLS").forEach((peli) => {
          contenedor.appendChild(crearContenedor(peli));
        });
        botonesComprar();
       break;
        
    }
  };
 
}
/* Funcion que retorna objetos que coinciden con la busqueda */
let busca=function filtrarPorCampo(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
/* EJECUCION DEL PROGRAMA */
/* Evento click para busqueda de pelicula  por nombre*/
buscar.onclick= (e)=>{
  e.preventDefault();
  contenedor.innerHTML="";/* Se eliminan los cards del contenedor para emular la recarga de la pagina por busqueda */
  for(pel of busca(peliculaDesdeLS('peliculasLS'), inputBusqueda.value)){/* Se los objetos filtrados para agregarlos como hijos del div principal */
  contenedor.appendChild(crearContenedor(pel)); 
}
  /* Para agregar y mostrar toastify */
  botonesComprar(); 
  /* Condición para determinar si hay películas como resultado de la búsqueda */
  contenedor.innerHTML==""?contenedor.innerHTML=`<h3>lo sentimos, no hay peliculas</h3>`: console.log("con peliculas");   
}

/* Funcion para agregar peliculas al carrito */
botonComprar.onclick= ()=>{        
  Swal.fire(
      'Operacion Exitosa',
      `Debes pagar: $${traerDatos('totalPago')}`,
      'success'
    )
    contenedorCarrito.innerHTML="";
    localStorage.removeItem('pelisCarrito');
    localStorage.removeItem('totalPago');  
}
botonVaciar.onclick =()=>{
  Swal.fire({
      title: 'Estas seguro que quieres vaciar el carrito?',
      text: "Esta operacion no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'  
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Operacion completada!',
          'El carrito ha sido vaciado',
          'success'
        )
        contenedorCarrito.innerHTML="";
        localStorage.removeItem('pelisCarrito');
        localStorage.removeItem('totalPago');
      }
    })
};