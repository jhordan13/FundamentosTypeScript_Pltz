function createPicture(title, date, size) {
    console.log("Se crea al fotografia usando : ", title, date, size);
}
createPicture("Mi cumpleaños", "2021-09-10", "500x500");
// ######## Parametros opcionales en funciones ##########
/*
OBS :
* Se utiliza el caracter "?" despues del nombre de la variable : name_var?
* Un parámetro opcional siempre debe ir al final en dado caso que existan otros parámetros obligatorios
*/
function madePicture(title, date, size) {
    console.log("Se hizo al fotografia usando : ", title, date, size);
}
madePicture("Mi cumpleaños", "2021-09-10", "500x500");
madePicture("Mi cumpleaños", "2021-09-10");
madePicture("Mi cumpleaños", "500x500");
madePicture("Mi cumpleaños");
// Funcion Matriz Plana (Flat Array Function)
var createPic = function (title, date, size) {
    /* Forma Extendidad
    return {
      title : title,
      date : date,
      size : size
    }
    */
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic("Pltazi class", "2021-09-10", "1000x1000");
console.log("picture : ", picture);
// Tipo de retorno con TypeScript
function HandleError(code, message) {
    // Procesamiento del codigo lenguaje
    if (message == "error") {
        throw new Error(message + ". Codigo de error : " + code);
    }
    else {
        return "Un error ha ocurrido";
    }
}
try {
    var result = HandleError(200, "Ok"); // Retorna string
    console.log("result : ", result);
    result = HandleError(404, "error"); //Retorna never que hace referencia a lanzar un error
    console.log("result : ", result);
}
catch (error) {
}
