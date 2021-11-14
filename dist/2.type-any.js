/* ######################## Tipo de dato Any ######################## */
// Declaracion Explicita
var idUser;
idUser = 1; // Temporalmente de tipo number hasta que se le asigne otro tipo de valor
idUser = "1"; // Temporalmente de tipo string hasta que se le asigne otro tipo de valor
console.log("idUser", idUser);
// Declaracion Inferida
var otherId;
otherId = 1;
otherId = "1";
console.log("otherId", otherId);
// Ejemplo de la precaucion a tener con el tipo "any"
var surprise = "Soy de tipo string";
var res = surprise.substring(6); // Potencial error, ya que substring solo funciona con "string"
console.log("res: ", res);
