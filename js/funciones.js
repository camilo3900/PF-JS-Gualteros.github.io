/* Se crea una clase de tipo pelicula */
class Pelicula {
  constructor(nombrePelicula, precioPelicula) {
    this.nombre = nombrePelicula;
    this.precio = precioPelicula;
  }
  alerta() {
    alert("Su nombre es: " + this.nombre + "\nSu precio es: $" + this.precio);
  }
}
/* Se crea clase de tipo Dulceria */
class Dulceria {
  constructor(nombreDulceria, precioDulceria) {
    this.nombre = nombreDulceria;
    this.precio = precioDulceria;
  }
  descripcion(d1, d2, d3) {
    console.log("Detalle 1: " + d1);
    console.log("Detalle 2: " + d2);
    console.log("Detalle 3: " + d3);
  }
}
/* La siguiente funcion permite escribir los mensajes de prompt para peticiones por teclado */
function solicitudes(texto){
  return prompt(texto);
}
/* Esta funcion crea un prompt para digitar la cantidad de comida que se desea comprar */
function itemComida(data1){
  console.log("Escogiste:"+ data1.nombre);
  cantidadComi=parseInt(solicitudes("Tipo: "+data1.nombre + "\n" + "Precio Comida: "+ +data1.precio + "\nCuantos combos desea comprar?")); 
}
/* Esta funcion es para la cantidad de entradas que se quiere comprar para ver una pelicula */
function itemPelis(data, tipo) {
  console.log("Escogiste:"+ data.nombre);
  cantidadPeli=parseInt(solicitudes(tipo + data.nombre + "\n" + "Precio "+tipo+": "+data.precio+ "\nCuantas entradas desea comprar?")); 
}
/* Esta funcion permite elegir la pelicula que se quiere ver */
function menuDulceria(opcion){
  switch (opcion) {
    case 1:
      itemComida(listaDulceria[opcion-1]);
      break;
    case 2:
      itemComida(listaDulceria[opcion-1]);
      break;
    case 3:
      itemComida(listaDulceria[opcion-1]);
      break;
    case 4:
      itemComida(listaDulceria[opcion-1]);
      break;
    case 5:
      itemComida(listaDulceria[opcion-1]);
      break;

    default:
      alert("Seleccion inválida!!");
      break;
  }
}
/* Esta funcion permite escoger la comida */
function menuPeliculas(opcion){
  switch (opcion) {
    case 1:
        itemPelis(listaPeliculas[opcion-1], "Pelicula");
      break;
      case 2:
        itemPelis(listaPeliculas[opcion-1], "Pelicula");
      break;
      case 3:
        itemPelis(listaPeliculas[opcion-1], "Pelicula");
      break;
      case 4:
        itemPelis(listaPeliculas[opcion-1], "Pelicula");  
      break;
      case 5:
        itemPelis(listaPeliculas[opcion-1], "Pelicula");
      break;
    default:
      alert("Seleccion inválida!!");
      break;
  }
}