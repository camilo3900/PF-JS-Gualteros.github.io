/* Se crea una clase de tipo pelicula */
class Pelicula {
  constructor(id, nombre, precio, img, genero) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.genero = genero;
  }
  alerta() {
    alert("Su nombre es: " + this.nombre + "\nSu precio es: $" + this.precio);
  }
}
/* Se crea clase de tipo Dulceria */
class Dulceria {
  constructor(id, nombre, precio, img) {
    this.id= id;
    this.nombre = nombre;
    this.precio = precio;
    this.img= img;
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

/* Listado Comidas */
const dulceria1 = new Dulceria(1, "Combo 1", 37000, "../images/combo1.jpg");
dulceria1.descripcion(
  "1 Crispeta Grande",
  "2 Gaseosas Grandes 32 Oz",
  "2 Chocolatinas 12 gr"
);
const dulceria2 = new Dulceria(2, "Combo 2", 54000, "../images/combo1.jpg");
dulceria2.descripcion(
  "1 Crispeta Mediana",
  "2 Perros Calientes",
  "2 Gaseosas Medianas Vaso 22 Oz"
);
const dulceria3 = new Dulceria(3, "Combo 3", 25000, "../images/combo1.jpg");
dulceria3.descripcion(
  "1 Crispeta Mediana",
  "1 Gaseosa Mediana Vaso 22 Oz",
  "1 Chocolatina 12 gr"
);
const dulceria4 = new Dulceria(4, "Combo 4", 22000, "../images/combo1.jpg");
dulceria4.descripcion(
  "1 Perro Caliente",
  "1 Gaseosa Mediana Vaso 22 Oz",
  "1 Chocolatina 12 gr"
);
const dulceria5 = new Dulceria(5, "Combo 5", 45000, "../images/combo1.jpg");
dulceria5.descripcion(
  "1 Crispeta Mediana",
  "2 Gaseosas Medianas Vaso 22 Oz",
  "1 Perro Caliente"
);
/* Listado Peliculas */

const pel1= new Pelicula(1, "Rapido y furioso 10", 9000, "../images/pelis/rapidos-&-furiosos.jpg", "Accion");
const pel2= new Pelicula(2, "Star Wars", 7600, "../images/pelis/star-wars.jpg", "Accion");
const pel3= new Pelicula(3, "Creed III", 2800, "../images/pelis/creed-iii.jpg", "Accion");
const pel4= new Pelicula(4, "Navalny", 1500, "../images/pelis/navalny.jpg", "Accion");
const pel5= new Pelicula(5, "Nine Bullets", 5800, "../images/pelis/nine_bullets.jpg", "Accion");
const pel6= new Pelicula(6, "Trasformers: El origen de las bestias", 1200, "../images/pelis/transformers-rise-of-the-beast.jpg", "Accion");
const pel7= new Pelicula(7, "La  Bestia", 1800, "../images/pelis/beast.jpg", "Accion");
const pel8= new Pelicula(8, "La Maldición", 2800, "../images/pelis/the-accursed.jpg", "Accion");
const pel9= new Pelicula(9, "Avatar Bajo el Agua", 57000, "../images/pelis/avatar-the-way-of-water.jpg", "Accion");
const pel10= new Pelicula(10, "Todo sobre mi madre", 4000, "../images/pelis/beast.jpg", "Accion");
const pel11= new Pelicula(11, "Briuser", 5500, "../images/pelis/bruiser.jpg", "Accion");
const pel12= new Pelicula(12, "Emancipation", 7000, "../images/pelis/emancipation.jpg", "Accion");
const pel13= new Pelicula(13, "Guardianes de la Glaxia V.03", 9000, "../images/pelis/guardians-of-the-galaxy.jpg", "Accion");
const pel14= new Pelicula(14,  "Sonic: The Hedgegod", 8000, "../images/pelis/sonic-the-hedgehog.jpg", "Accion");
const pel15= new Pelicula(15, "Flash", 6700, "../images/pelis/flash.jpg", "Accion");
const pel16= new Pelicula(16, "Mario Bros: La pelicula", 11000, "../images/pelis/super-mario-bros-the-movie.jpg", "Accion");