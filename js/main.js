/* Instancias de Objetos tipo pelicula */
const pelicula1 = new Pelicula("Los Pitufos", 15000);
const pelicula2 = new Pelicula("Los Simpson", 10000);
const pelicula3 = new Pelicula("Ecanto", 12000);
const pelicula4 = new Pelicula("El Lightyear", 14000);
const pelicula5 = new Pelicula("La Balada del Pistolero", 12000);
/* Instancias de Objetos tipo Dulcería */
const dulceria1 = new Dulceria("Combo 1", 37000);
dulceria1.descripcion(
  "1 Crispeta Grande",
  "2 Gaseosas Grandes 32 Oz",
  "2 Chocolatinas 12 gr"
);
const dulceria2 = new Dulceria("Combo 2", 54000);
dulceria2.descripcion(
  "1 Crispeta Mediana",
  "2 Perros Calientes",
  "2 Gaseosas Medianas Vaso 22 Oz"
);
const dulceria3 = new Dulceria("Combo 3", 25000);
dulceria3.descripcion(
  "1 Crispeta Mediana",
  "1 Gaseosa Mediana Vaso 22 Oz",
  "1 Chocolatina 12 gr"
);
const dulceria4 = new Dulceria("Combo 4", 22000);
dulceria4.descripcion(
  "1 Perro Caliente",
  "1 Gaseosa Mediana Vaso 22 Oz",
  "1 Chocolatina 12 gr"
);
const dulceria5 = new Dulceria("Combo 5", 45000);
dulceria5.descripcion(
  "1 Crispeta Mediana",
  "2 Gaseosas Medianas Vaso 22 Oz",
  "1 Perro Caliente"
);

/*lista contenedora de objetos tipo pelicula */
let listaPeliculas= [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];
/* lista contenedora de objetos tipo dulceria */
let listaDulceria=[dulceria1, dulceria2, dulceria3, dulceria4, dulceria5];
/* lista de salas de cine */
let listaSalas=["Sala 2D", "Sala 3D", "Sala Ultra 3D", "Sala VIP"];
/* Se inicializan las variables que se van a tener en cuenta en el transcurso del programa */
let siga=true;
let opcionPelicula="";
let cantidadPeli="";
let cantidadComi="";
let opcionDulceria="";
let opcionMenu="";
let sala="";
/* Se pide el nombre y edad del usuario separados por un espacio */
datosCliente=prompt("Bienvenido a CINE-KINGDOM\nAntes de iniciar escribe tu nombre y apellido separados por un espacio: ");
/* Se utiliza el metodo split para separar el array datosCliente y asignarlos a variables por separado */
let datosClientesLista = datosCliente.split(" ");
// Obtener los datos individuales
const nombreCliente = datosClientesLista[0];
const edadCliente= datosClientesLista[1];
console.log("name: "+nombreCliente);
console.log("age: "+parseInt(edadCliente));
/* Se utiliza un do-while para garantizar que el menu principal se visualice al menos una vez  */
do { 
   opcionMenu=parseInt(solicitudes("MENU PRINCIPAL PELICULA-KINGDOM\n1.Peliculas\n2.Dulcería\n3.Salas\n4.Factura\n5.Salir\nEscoge una opción: "));
  switch (opcionMenu) {
    case 1:
      console.log("elegiste pelicula");
      siga=false;
      opcionPelicula= parseInt(solicitudes("Escoge la pelicula que quieres ver:\n1."+listaPeliculas[0].nombre+"\n2."+listaPeliculas[1].nombre+"\n3."+listaPeliculas[2].nombre+"\n4."+listaPeliculas[3].nombre+"\n5."+listaPeliculas[4].nombre));
            menuPeliculas(opcionPelicula);
      siga=true;
      break;
      case 2:
        opcionDulceria=parseInt(solicitudes("Escoge un Combo para ver detalles:\n1."+ listaDulceria[0].nombre+ "\n2."+ listaDulceria[1].nombre+ "\n3."+listaDulceria[2].nombre+"\n4."+listaDulceria[3].nombre+"\n5."+listaDulceria[4].nombre));
              menuDulceria(opcionDulceria);
        siga=true;
        break;
        case 3:
        sala=solicitudes("SALAS DISPONIBLES \n1."+listaSalas[0]+"\n2."+listaSalas[1]+"\n3."+listaSalas[2]+"\n4."+listaSalas[3]+"\nEscoge una sala: ");
        siga=true;
      break;
      case 4:
        let pelicula = listaPeliculas[opcionPelicula - 1].nombre;
        let precioPelicula = listaPeliculas[opcionPelicula - 1].precio;
        let cantidadPeliculas = cantidadPeli;
        let cantidadComida = cantidadComi;
        let comida = listaDulceria[opcionDulceria - 1].nombre;
        let precioComida = listaDulceria[opcionDulceria - 1].precio;
        let totalEntradas = precioPelicula * cantidadPeliculas;
        let totalComida = precioComida * cantidadComida;
        let salaEscogida = listaSalas[sala - 1];
        let totalTotal = "";

        if (parseInt(edadCliente) < 18 || parseInt(edadCliente) > 60) {
          totalTotal =
            totalEntradas + totalComida - (totalEntradas + totalComida) * 0.2;
          alert(
            "FACTURA: CINE-KINGDOM\nCliente: " +
              nombreCliente +
              "\n-----------------------------------------\n++CARTELERA++\npelicula: " +
              pelicula +
              "\n" +
              "Sala: " +
              salaEscogida +
              "\n" +
              "Precio Entrada: $" +
              precioPelicula +
              "\n" +
              "Numero de Entradas: " +
              cantidadPeliculas +
              "\n" +
              "Valor total Entradas: $" +
              totalEntradas +
              "\n\n-----------------------------------------\n++DULCERIA++\nTipo: " +
              comida +
              "\nPrecio Comida: $" +
              precioComida +
              "\nCantidad: " +
              cantidadComida +
              "\nValor total Comida: $" +
              totalComida +
              "\n-----------------------------------------\nTOTAL PAGAR: $" +
              totalTotal +
              '\n"NOTA: LOS MENORES DE EDAD Y MAYORES DE 60 AÑOS RECIBEN UN 20% DE DESCUENTO SOBRE EL VALOR TOTAL"'
          );
        } else {
          totalTotal = totalEntradas + totalComida;
          alert(
            "FACTURA: CINE-KINGDOM\nCliente:\n-----------------------------------------\n++CARTELERA++\npelicula: " +
              pelicula +
              "\n" +
              "Sala: " +
              salaEscogida +
              "\n" +
              "Precio Entrada: $" +
              precioPelicula +
              "\n" +
              "Numero de Entradas: " +
              cantidadPeliculas +
              "\n" +
              "Valor total Entradas: $" +
              totalEntradas +
              "\n\n-----------------------------------------\n++DULCERIA++\nTipo: " +
              comida +
              "\nPrecio Comida: $" +
              precioComida +
              "\nCantidad: " +
              cantidadComida +
              "\nValor total Comida: $" +
              totalComida +
              "\n-----------------------------------------\nTOTAL PAGAR: $" +
              totalTotal
          );
        }
        siga=false;
      break;
      case 5:
        siga=false;
        break;
    default:
      alert("Selección erronea.  Intenta de nuevo!!");
      siga=true;
      break;
  } 
} while (siga);