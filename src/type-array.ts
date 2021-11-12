/* ######################## Tipo de dato Array ######################## */

// ######### Notacion: Corchetes [] #############

// Declaracion Explicita

let users : string[];
users = ["jordan", "Luisa", "Sandra"];
// users = [ "hola", 1 , true]; --> Error por no tener todos sus valores de tipo String 

// Declaracion Inferida

let otherUser = ["Jordan", "Luisa", "Sandra"];
// otherUsers = [ "hola", 1 , true]; --> Error por no tener todos sus valores de tipo String


// ######### Notacion: Array<TIPO> #############

let pictureTitles: Array<string>;
pictureTitles = ["Favorite Sunset", "Vacation Time", "Landscape"];


/* ---------- Formas de acceder a los valores de un Array ------------*/
console.log("firstUsers: ", users[0]);
console.log("firstPicture: ", pictureTitles[0]);

/* ---------- Propiedades de un Array ------------*/
console.log("users.length", users.length);

/* ---------- Uso de funciones en un Array ------------*/
users.push("NewUser");
console.log("user.push('newUser'):", users);

users.sort(); // Ordena primero las mayusculas y luego minusculas 
console.log("user.sort() :", users);

/*
!##################################################
!       Arreglos de diferentes tipos de Datos
!##################################################
*/

// CASO 1: Arreglo que soporta diferentes tipos de datos definidos

let myArray: (string | number | boolean)[]; // Solo puede tomar valores de estos tres tipos definidos
myArray = [false, 1, '2'];
// myArray = [{}, 1, '2']; --> Error ya que el tipo "objeto" no esta permitido

// CASO 2: Arreglo que soporta diferentes tipos de datos de forma irrestricta

let myOtherArray: any[];
myOtherArray = [{}, true, 'two', 0b11];
myOtherArray = [true, 12, {}, "texto"];


