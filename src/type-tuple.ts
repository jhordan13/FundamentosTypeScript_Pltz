/* ######################## Tipo de dato Tupla ######################## */
/*
Una tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar 
un elemento se validará que dicho elemento coincida con el tipo de dato establecido en esa posicion de la tupla.
*/

export {}; // Nos permite utilizar "user" que el compilador considera que ya fue creado por otro archivo ".ts"

let user : [number, string];
user = [1 , "Jordan"];

console.log("user : ", user);
console.log("username : ", user[1]);
console.log("username.length : ", user[1].length);
console.log("id : ", user[0]);

// Tuplas con varios tipos de elementos

let userInfo : [number, string, boolean]; // id, username, isPro
userInfo = [2, "Jordan", true];
console.log("userInfo: ", userInfo);

// Arreglo de Tuplas

let arrayTuplas : [number, string] [] = []; //Para usar la funcion "push"hay inicializar el arreglo
arrayTuplas.push([1, "first"]);
arrayTuplas.push([2, "second"]);
arrayTuplas.push([3, "third"]);
console.log("arrayTuplas: ", arrayTuplas);

// Uso de funciones Array

// "second" --> "secondary"
arrayTuplas[1][1] = arrayTuplas[1][1].concat("ary"); // Concatenamos la cadena "ary"
console.log("arrayTuplas: ", arrayTuplas);