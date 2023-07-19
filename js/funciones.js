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

const peliculasJSON =  consumirPeliculas();

/* Se llema el JSON de peliculas y se guarda en el localStorage */
function consumirPeliculas(){
 fetch('../datos/peliculas.json')
  .then((response) =>{
    return  response.json();
  })
  .then((data)=> {
    pelis=data;
    console.log( pelis);
    llenarLocalStorage('peliculasLS', pelis);
  })
  .catch((error)=> {
    console.log('Ocurrió un error:'+error);
  })
};

 /* funcion para llenar el storage */
 function llenarLocalStorage(clave, dato){
  localStorage.setItem(clave, JSON.stringify(dato));/* Se convierte el listado de objetos a String */
 } 
/* Funcion para traer lista de carrito */
 const traerDatos= (clave)=> JSON.parse(localStorage.getItem(clave));


/* Funcion para traer las peliculas del localStorage*/
const peliculaDesdeLS=(llave)=>JSON.parse(localStorage.getItem(llave));/* Se llama cada lista */

/*  se filtran las peliculas del storage que coincidan con la categoria seleccionada */
let buscaCategoria=function filtrarCategoria(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.genero==filtro;
  });
  return filtrado;
}
function cargarProductos(dato){
  return productosCarrito=dato;
}
const guardarLocal=(clave, valor)=>{
  return localStorage.setItem(clave, JSON.stringify(valor));
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
    item.id = dato.id;
    item.className="grid-item-carrito";
    item.innerHTML=`               
     <img src="${dato.img}" alt="">
    <div class="carrito-nombre">
        <h5>Nombre</h5>
        <h4>${dato.nombre}</h4>
    </div>
    <div class="carrito-cantidad">
        <h5>Cantidad</h5>
        <h4 class="cant">${dato.id}</h4>
        <div class="cantidad-modificador">
        <div class="cuadro">
            <i class="fa-sharp fa-solid fa-arrow-right agregar"></i>
        </div>
        <div class="cuadro">
            <i class="fa-sharp fa-solid fa-arrow-right fa-rotate-180 quitar"></i>
        </div>
    </div>
    </div>
    <div class="carrito-total">
        <h5>Total</h5>
        <h4 >${dato.precio}</h4>
    </div>
    <div class="carrito-subtotal">
        <h5>Subtotal</h5>
        <h4>${dato.precio}</h4>
    </div>
    <div id="opciones_carrito">
    <button class="carrito-eliminar" id="${dato.id}"><i class="fa-solid fa-trash"></i></button>
    <button class="carrito-editar "><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
    </div>`
    return item;
}

/* Crear estructura de pantalla de carga */
const imagenCarga= ()=>{
  const imagen= document.createElement('div');
  imagen.innerHTML=` 
  <img src="https://cdn.pixabay.com/animation/2022/12/05/15/23/15-23-06-837_512.gif" alt="carga">
  <p>Procesando informacion...</p>
`
  return imagen;
}
/* Funcion para cargar cards de peliculas por categorias */
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




  

