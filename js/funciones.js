/* Clase de tipo Pelicula */
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

/* Clase de tipo Dulceria */
class Comida {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
  descripcion(d1, d2, d3) {
    console.log("Detalle 1: " + d1);
    console.log("Detalle 2: " + d2);
    console.log("Detalle 3: " + d3);
  }
}

/* Objetos Comida */
const comida1 = new Comida(1, "Combo 1", 37000, "../images/combo1.jpg");
comida1.descripcion(
  "1 Crispeta Grande",
  "2 Gaseosas Grandes 32 Oz",
  "2 Chocolatinas 12 gr"
);
const comida2 = new Comida(2, "Combo 2", 54000, "../images/combo1.jpg");
comida2.descripcion(
  "1 Crispeta Mediana",
  "2 Perros Calientes",
  "2 Gaseosas Medianas Vaso 22 Oz"
);
const comida3 = new Comida(3, "Combo 3", 25000, "../images/combo1.jpg");
comida3.descripcion(
  "1 Crispeta Mediana",
  "1 Gaseosa Mediana Vaso 22 Oz",
  "1 Chocolatina 12 gr"
);
const comida4 = new Comida(4, "Combo 4", 22000, "../images/combo1.jpg");
comida4.descripcion(
  "1 Perro Caliente",
  "1 Gaseosa Mediana Vaso 22 Oz",
  "1 Chocolatina 12 gr"
);
const comida5 = new Comida(5, "Combo 5", 45000, "../images/combo1.jpg");
comida5.descripcion(
  "1 Crispeta Mediana",
  "2 Gaseosas Medianas Vaso 22 Oz",
  "1 Perro Caliente"
);
/* Objetos tipo Pelicula */

const pel1 = new Pelicula(
  1,
  "Rapido y furioso 10",
  9000,
  "../images/pelis/rapidos-&-furiosos.jpg",
  "Accion"
);
const pel2 = new Pelicula(
  2,
  "Star Wars",
  7600,
  "../images/pelis/star-wars.jpg",
  "Accion"
);
const pel3 = new Pelicula(
  3,
  "Creed III",
  2800,
  "../images/pelis/creed-iii.jpg",
  "Accion"
);
const pel4 = new Pelicula(
  4,
  "Navalny",
  1500,
  "../images/pelis/navalny.jpg",
  "Guerra"
);
const pel5 = new Pelicula(
  5,
  "Nine Bullets",
  5800,
  "../images/pelis/nine_bullets.jpg",
  "Accion"
);
const pel6 = new Pelicula(
  6,
  "Trasformers: El origen de las bestias",
  1200,
  "../images/pelis/transformers-rise-of-the-beast.jpg",
  "Accion"
);
const pel7 = new Pelicula(
  7,
  "La  Bestia",
  1800,
  "../images/pelis/beast.jpg",
  "Accion"
);
const pel8 = new Pelicula(
  8,
  "La Maldición",
  2800,
  "../images/pelis/the-accursed.jpg",
  "Terror"
);
const pel9 = new Pelicula(
  9,
  "Avatar Bajo el Agua",
  57000,
  "../images/pelis/avatar-the-way-of-water.jpg",
  "Aventura"
);
const pel10 = new Pelicula(
  10,
  "Todo sobre mi madre",
  4000,
  "../images/pelis/beast.jpg",
  "Accion"
);
const pel11 = new Pelicula(
  11,
  "Briuser",
  5500,
  "../images/pelis/bruiser.jpg",
  "Accion"
);
const pel12 = new Pelicula(
  12,
  "Emancipation",
  7000,
  "../images/pelis/emancipation.jpg",
  "Accion"
);
const pel13 = new Pelicula(
  13,
  "Guardianes de la Glaxia V.03",
  9000,
  "../images/pelis/guardians-of-the-galaxy.jpg",
  "Accion"
);
const pel14 = new Pelicula(
  14,
  "Sonic: The Hedgegod",
  8000,
  "../images/pelis/sonic-the-hedgehog.jpg",
  "Infantil"
);
const pel15 = new Pelicula(
  15,
  "Flash",
  6700,
  "../images/pelis/flash.jpg",
  "Accion"
);
const pel16 = new Pelicula(
  16,
  "Mario Bros: La pelicula",
  11000,
  "../images/pelis/super-mario-bros-the-movie.jpg",
  "Aventura"
);
const pel17 = new Pelicula(
  17,
  "Elemental",
  5500,
  "../images/pelis/elemental.jpg",
  "Infantil"
);
const pel18 = new Pelicula(
  18,
  "End of Loyalty",
  6000,
  "../images/pelis/end-of-loyalty.jpg",
  "Guerra"
);
const pel19 = new Pelicula(
  19,
  "Mansion Encantada",
  9000,
  "../images/pelis/haunted-mansion.jpg",
  "Terror"
);
const pel20 = new Pelicula(
  20,
  "Peter Pan y Wendy",
  8000,
  "../images/pelis/peter-pan-y-wendy.jpg",
  "Infantil"
);
const pel21 = new Pelicula(
  21,
  "Spiderman: Across the spiderverse",
  8000,
  "../images/pelis/spiderman_across_the_spiderverse.jpg",
  "Aventura"
);
const pel22 = new Pelicula(
  22,
  "Paw Patrol: The migthy movie",
  8000,
  "../images/pelis/paw-patrol-the-mighty-movie.jpg",
  "Infantil"
);
const pel23 = new Pelicula(
  23,
  "Indiana Jones: El Dia del Destino",
  8000,
  "../images/pelis/indiana-jones-and-the-dial-of-destiny.jpg",
  "Aventura"
);
const pel24 = new Pelicula(
  24,
  "Extraction 2",
  8000,
  "../images/pelis/extraction-two.jpg",
  "Guerra"
);
const pel25 = new Pelicula(
  25,
  "Chicken Run",
  8000,
  "../images/pelis/chicken-run.jpg",
  "Infantil"
);
const pel26 = new Pelicula(
  26,
  "Bad Guys",
  8000,
  "../images/pelis/bad-guys.jpg",
  "Infantil"
);
const pel27 = new Pelicula(
  27,
  "La Elefanta del Mago",
  8000,
  "../images/pelis/magicians-elephant.jpg",
  "Aventura"
);
const pel28 = new Pelicula(
  28,
  "Scream Six",
  8000,
  "../images/pelis/scream-six.jpg",
  "Terror"
);
const pel29 = new Pelicula(
  29,
  "Evil Dead Rise",
  8000,
  "../images/pelis/evil-dead-rise.jpg",
  "Terror"
);
const pel30 = new Pelicula(
  30,
  "Contractor",
  8000,
  "../images/pelis/contractor.jpg",
  "Guerra"
);
const pel31 = new Pelicula(
  31,
  "Adam Project",
  8000,
  "../images/pelis/adam-project.jpg",
  "Guerra"
);
const pel32 = new Pelicula(
  32,
  "Amazing Maurice",
  8000,
  "../images/pelis/amazing-maurice.jpg",
  "Infantil"
);
const pel33 = new Pelicula(
  33,
  "The boogeyman",
  8000,
  "../images/pelis/boogeyman.jpg",
  "Terror"
);
const pel34 = new Pelicula(
  34,
  "Living with Chucky",
  8000,
  "../images/pelis/living-with-chucky.jpg",
  "Infantil"
);
const pel35 = new Pelicula(
  35,
  "Dungeons and Dragons",
  8000,
  "../images/pelis/dungeons-and-dragons-honor-among-thieves.jpg",
  "Aventura"
);
const pel36 = new Pelicula(
  36, 
  "Antman: Quantumania",
  12000,
  "../images/pelis/antman-and-the-wasp-quantumania.jpg",
  "Accion"
)


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
  <img src="${dato.img}" alt="${dato.nombre}">
  <h3>${dato.nombre}</h3>
  <p class="texto_card">Precio: $${dato.precio} </p>
  <p class="texto_card">Genero: ${dato.genero} </p>
    <div class="card-action">
      <button class="btn_comprar">Comprar</button>
    </div>
</div>`;
return productArticle;
}


  