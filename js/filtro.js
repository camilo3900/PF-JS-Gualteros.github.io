/* const contenedor= document.querySelector('#principal'); */
const contenedor= document.querySelector('#principal');
const buscar= document.querySelector('#boton_buscar');
const inputBusqueda= document.querySelector('#campo')
/* const informacion= document.querySelector('.Info'); */

const comidas=[dulceria1, dulceria2, dulceria3, dulceria4, dulceria5];
const peliculas = [pel1, pel2, pel3, pel4, pel5, pel6, pel7, pel8, pel9, pel10, pel11, pel12, pel13, pel14, pel15, pel16];
//Funcion para crear tarjetas para peliculas

/* localStorage.clear() */
function llenarLocalStorage(){
 localStorage.setItem('pelis', JSON.stringify(peliculas));
 localStorage.setItem('food', JSON.stringify(comidas));
  

} 
function crearContenedor(dato){
  const productArticle = document.createElement('article');
  productArticle.innerHTML=`<div class="card">
  <img src=" ${dato.img}" alt="${dato.nombre}">
  <hr>
  <h3>${dato.nombre}</h3>
  <p>Precio: $${dato.precio} </p>
    <div class="card-action">
      <button>Comprar</button>
    </div>
</div>`;
return productArticle;
}
llenarLocalStorage();
const peliculaDesdeLS=(llave)=>JSON.parse(localStorage.getItem(llave));
console.log(peliculaDesdeLS('pelis').length);
console.log(peliculaDesdeLS('pelis'));
peliculaDesdeLS('pelis').forEach(peli => {
  
  contenedor.appendChild(crearContenedor(peli));


})
/* sara CamposElias */
/* PARA FILTRAR EL OBJETO */
buscar.onclick= (e)=>{
  e.preventDefault();
  console.log("buscando pelicula...");
  contenedor.innerHTML="";
  const f=function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((peli) => {
      return peli.nombre.includes(filtro);
    });
    return filtrado;
  }

  let busca=function filtrarPorCampo(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombre.includes(filtro);
    });
    return filtrado;
  }
  console.log(busca(peliculaDesdeLS('pelis'), inputBusqueda.value).length);
  for(peli of busca(peliculaDesdeLS('pelis'), inputBusqueda.value)){
    contenedor.appendChild(crearContenedor(peli));

  }
  contenedor.innerHTML==""?contenedor.innerHTML=`<h3>lo sentimos, no hay peliculas</h3>`: console.log("con peliculas");   
  console.log(f(peliculaDesdeLS('pelis'), inputBusqueda.value));
}