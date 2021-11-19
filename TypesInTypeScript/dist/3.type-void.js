/* ######################## Tipo de dato Void ######################## */
// Declaracion Explicita
function showInfo(user) {
    console.log("User info: ", user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: "jordan13", firstName: "Jordan" });
// Declaracion Implicita
function ShowFormatedInfo(user) {
    console.log("User info: ", `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
  `);
}
ShowFormatedInfo({ id: 1, username: "jordan13", firstName: "Jordan" });
// #### Tipo void como tipo de variable ####
let unusable;
unusable = null; // De forma predeterminada esta asignacion es un error y para arreglar esto debemos configurar el archivo "tsconfig.json" con '"stric": false'
unusable = undefined;
/* ######################## Tipo de dato Never ######################## */
function handleError(code, message) {
    // Procesamos el codigo aqui
    // Generamos un mensaje
    throw new Error(`${message}. Code : ${code}`);
}
// Necesitamos definir un try cath para la correcta gestion de nuestra funcion
try {
    handleError(404, "Not found");
}
catch (error) {
}
// Por ser un bucle infinito le indicamos al compilador de typescript que no terminara de ejecutarse y nunca devolvera algo 
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(5);
/*
OBS:
El detalle está en que las funciones tipo void realizan algo y terminan su flujo (sentencias, instrucciones…), por defecto al
no retorna nada (ningún dato) devuelven undefined (pero terminan y devuelven algo). En cambio las tipo never son las que nunca
retornar, se podría ver como que no terminan sus instrucciones, por ello los ejemplos son lanzando una excepción (que por
definición interrumpe la ejecución normal del código) y generando un bucle infinito.
Esa es la gran diferencia entre void y never, la primera termina su código pero no retorna datos, la otra no termina y, por
ende, nunca retorna. Never en TypeScript es muy útil precisamente para manejo de errores como se comentó en el ejemplo
*/ 
