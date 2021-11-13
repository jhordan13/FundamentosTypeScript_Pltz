/* ########### Union de Tipos ############ */

// La variable puede tomar valores de tipo number o string
let IdUser : number | string ;
IdUser = 10;
IdUser = "10";

// Buscar username dado un ID
function getUsernameById(id : number | string){

  // Logica de la funcion

  return "Resultado";
}

console.log(getUsernameById(10));
console.log(getUsernameById("10"));

/* ########### Alias de Tipos ############ */

type newType = number | string ; // Definimos un nuevo tipo de la union de "number" y "string"
type izi = string ; // Podemos definir un alias a un unico tipo ya existente

// Funcion que recibe variables de tipo "newType" con retorno de tipo "izi" (string)
function getTextById(id : newType ) : izi {

  // Logica de la funcion

  return "Fin";
}

console.log(getTextById(20));
console.log(getTextById("20"));

/* ########### Tipos Literales ############ */
// Define un nuevo tipo de dato que solo puede tomar valores "string" que nosotros definimos

type SquareSize = "100x100" | "500x500" | "1000x1000";
let smallPictures : SquareSize = "100x100";
let mediumPictures : SquareSize = "500x500";
let largePictures : SquareSize = "1000x1000";
// let otherPictures : SquareSize = "200x200"; --> Error por no ser un valor definido

// ###################  Reto Union ########################

enum Sizes{
  small = '75x75',
  medium = '240x180',
  large = '500x375',
  extraLarge = '1024x768',
  superLarge = '3072x2304'
}

type sizesType = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304';

const newSize : sizesType = '500x375';
console.log("newSize : ",newSize);