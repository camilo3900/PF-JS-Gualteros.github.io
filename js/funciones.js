/* Clase de tipo Pelicula */
class Pelicula {
  constructor(id, nombre, precio, img, genero) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.genero = genero;
  }
  pagar(cantidad) {
    return total= this.precio*cantidad;
  }
}

/* Funcion para consumir archivo json de peliculas */
function consumirPeliculas(){
  fetch('../datos/peliculas.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    pelis=data;
    console.log("Peliculas consumidas");
    console.log(pelis);
    llenarLocalStorage('peliculasLS', pelis ); 
  })
  .catch(function(error) {
    console.log('Ocurrió un error:'+error);
  });
}

 /* funcion para llenar el storage */
 function llenarLocalStorage(clave, dato){
  localStorage.setItem(clave, JSON.stringify(dato));/* Se convierte el listado de objetos a String */
 } 

/* Funcion para traer las peliculas del localStorage*/
const peliculaDesdeLS=(llave)=>JSON.parse(localStorage.getItem(llave));/* Se llama cada lista */

/*  se filtran las peliculas del storage que coincidan con la categoria seleccionada */
let buscaCategoria=function filtrarCategoria(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.genero==filtro;
  });
  return filtrado;
}

/* Funcion para crear el contenedor donde se mostrará cada película */
function crearContenedor(dato){
  const productArticle = document.createElement('article');
  productArticle.innerHTML=
  `<div class="card d-flex flex-fill" >
  <img src=" ${dato.img}" alt="${dato.nombre}">
  <h3>${dato.nombre}</h3>
  <p>Precio: $${dato.precio} </p>
  <p>Categoria: ${dato.genero} </p>
    <div class="card-action">
      <button class="btn_comprar" id="${dato.id}">Comprar</button>
    </div>
</div>`;
return productArticle;
}

/* Funcion para crear el item de la compra */
function crearItemCompra(dato){
  const item = document.createElement('div');
  item.id="grid-item-carrito";
  item.innerHTML=`               
   <img src="${dato.img}" alt="">
  <div class="carrito-nombre">
      <h5>Nombre</h5>
      <h4>${dato.nombre}</h4>
  </div>
  <div class="carrito-cantidad">
      <h5>Cantidad</h5>
      <h4>1</h4>
  </div>
  <div class="carrito-total">
      <h5>Total</h5>
      <h4>${dato.precio}</h4>
  </div>
  <div class="carrito-subtotal">
      <h5>Subtotal</h5>
      <h4>$1000</h4>
  </div>
  <div id="opciones_carrito">
  <button class="carrito-eliminar ${dato.id}"><i class="fa-solid fa-trash"></i></button>
  <button class="carrito-editar ${dato.id}"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
  </div>`
  return item;
}

/* Crear estructura de pantalla de carga */
const imagenCarga= ()=>{
  const imagen= document.createElement('div');
  imagen.innerHTML=` <div>
  <img src="https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif" alt="carga">
  <p>Procesando informacion...</p>
</div>`
return imagen;
}
/* Promesa para la carga del listado de peliculas */
/* let carga = (response, dato, cargar)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(response){
        resolve("muestra carga");
        contenedor.appendChild(crearContenedor(dato));
        contenedor.removeChild(cargar);
        botonesComprar(); 
      }
      else{
        reject("Sin peliculas");
      }
    }, 2000);
    });

}; */
let carga = (response, dato, cargar)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(response){
        resolve("muestra carga");
        contenedor.removeChild(cargar);
        for(topic of dato){
          contenedor.appendChild(crearContenedor(topic));
        }
         
        botonesComprar(); 
      }
      else{
        reject("Sin peliculas");
      }
    }, 2000);
    });

};

  