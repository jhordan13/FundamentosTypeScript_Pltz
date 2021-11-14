type BoxSize = "100x100" | "500x500" | "1000x1000";

function createPicture(title : string , date : string , size : BoxSize){
  console.log("Se crea al fotografia usando : ", title, date, size);
} 

createPicture("Mi cumpleaños", "2021-09-10","500x500");

// ######## Parametros opcionales en funciones ##########
/* 
OBS : 
* Se utiliza el caracter "?" despues del nombre de la variable : name_var?
* Un parámetro opcional siempre debe ir al final en dado caso que existan otros parámetros obligatorios
*/

function madePicture(title : string , date? : string , size? : BoxSize){
  console.log("Se hizo al fotografia usando : ", title, date, size);
}

madePicture("Mi cumpleaños", "2021-09-10","500x500");
madePicture("Mi cumpleaños", "2021-09-10");
madePicture("Mi cumpleaños","500x500");
madePicture("Mi cumpleaños");

// Funcion Matriz Plana (Flat Array Function)

let createPic = (title : string , date : string , size : BoxSize) : object => {

  /* Forma Extendidad
  return {
    title : title,
    date : date,
    size : size
  }
  */

  return {
    title,
    date,
    size
  }
    
}

const picture = createPic("Pltazi class", "2021-09-10","1000x1000");
console.log("picture : ",picture);