/* const contenedor= document.querySelector('#principal'); */
const buttonCategorias = document.querySelector(".dropdown-menu");
const boton=document.querySelector(".btn");
const contenedor= document.querySelector('#principal');
const buscar= document.querySelector('#boton_buscar')
const inputBusqueda= document.querySelector('#campo')
/* const informacion= document.querySelector('.Info'); */
/* Se organizan los objetos tipo  */
const comidas=[comida1, comida2, comida3, comida4, comida5];
const peliculas = [pel1, pel2, pel3, pel4, pel5, pel6, pel7, pel8, pel9, pel10, pel11, pel12, pel13, pel14, pel15, pel16, pel17, pel18, pel19, pel20, pel21, pel22, pel23, pel24, pel25, pel26, pel27, pel28, pel29, pel30, pel31, pel32, pel33, pel34, pel35, pel36];
/* Se llama la funcion para guardar variables en el storage */
llenarLocalStorage();
/* localStorage.clear(); */
/* Se crea un listado de categorias */
let listaCategorias = [
  "Todas las Categorias",
  "Accion",
  "Aventura",
  "Comedia",
  "Guerra",
  "Infantil",
  "Terror",
];
/* Mediante la funcion filtrarCategoria se filtran las peliculas del storage que coincidan con atributo genero escogido */
let buscaCategoria=function filtrarCategoria(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.genero==filtro;
  });
  return filtrado;
}
/*Se recorre la lista para generar los li de categorias */
for (const cate of listaCategorias) {
  const item = document.createElement("li");
  const categoria = document.createElement('a');
  categoria.textContent=cate;
  categoria.classList.add('dropdown-item');
  item.appendChild(categoria);
 buttonCategorias.appendChild(item);

     categoria.onclick=()=>
     {
      contenedor.innerHTML="";
       boton.innerText=cate;
       for (const peli of buscaCategoria(peliculaDesdeLS('pelis'), cate)) {
                   /* Aqui va el friltrado por genero */
       contenedor.appendChild(crearContenedor(peli));
       }
      boton.innerText=="Todas las Categorias"? peliculaDesdeLS('pelis').forEach(peli => { 
          contenedor.appendChild(crearContenedor(peli))}):"";
          contenedor.innerHTML==""?contenedor.innerHTML=`<h3>lo sentimos, no hay peliculas de esta Categoria</h3>`: console.log("con peliculas"); 
     }  
}



/* funcion para llenar el storage */
function llenarLocalStorage(){
 localStorage.setItem('pelis', JSON.stringify(peliculas));/* Se convierte el listado de objetos a String */
 localStorage.setItem('food', JSON.stringify(comidas));
} 
/* Funcion para crear card de peliculas */
function crearContenedor(dato){
  const productArticle = document.createElement('article');
  productArticle.innerHTML=
  `<div class="card d-flex flex-fill" >
  <img src=" ${dato.img}" alt="${dato.nombre}">
  <h3>${dato.nombre}</h3>
  <p>Precio: $${dato.precio} </p>
  <p>Categoria: ${dato.genero} </p>
    <div class="card-action">
      <button>Comprar</button>
    </div>
</div>`;
return productArticle;
}
  /* Funcion que retorna objetos que coinciden con la busqueda */
  let busca=function filtrarPorCampo(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombre.includes(filtro);
    });
    return filtrado;
  }
/* Para mostrar todas las peliculas */
const peliculaDesdeLS=(llave)=>JSON.parse(localStorage.getItem(llave));/* Se llama cada lista */
console.log(peliculaDesdeLS('pelis'));
peliculaDesdeLS('pelis').forEach(peli => { 
  contenedor.appendChild(crearContenedor(peli));
})

/* Evento click para busqueda de pelicula */
buscar.onclick= (e)=>{

  e.preventDefault();
  contenedor.innerHTML="";/* Se eliminan los cards del contenedor para emular la recarga de la pagina por busqueda */

  console.log(busca(peliculaDesdeLS('pelis'), inputBusqueda.value).length);
  for(peli of busca(peliculaDesdeLS('pelis'), inputBusqueda.value)){/* Se los objetos filtrados para agregarlos como hijos del div principal */
    contenedor.appendChild(crearContenedor(peli));

  }
  /* Condición para determinar si hay películas como resultado de la búsqueda */
  contenedor.innerHTML==""?contenedor.innerHTML=`<h3>lo sentimos, no hay peliculas</h3>`: console.log("con peliculas");   
  console.log(f(peliculaDesdeLS('pelis'), inputBusqueda.value));


}
