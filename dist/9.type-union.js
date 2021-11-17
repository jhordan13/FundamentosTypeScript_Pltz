/* ########### Union de Tipos ############ */
// La variable puede tomar valores de tipo number o string
let IdUser;
IdUser = 10;
IdUser = "10";
// Buscar username dado un ID
function getUsernameById(id) {
    // Logica de la funcion
    return "Resultado";
}
console.log(getUsernameById(10));
console.log(getUsernameById("10"));
// Funcion que recibe variables de tipo "newType" con retorno de tipo "izi" (string)
function getTextById(id) {
    // Logica de la funcion
    return "Fin";
}
console.log(getTextById(20));
console.log(getTextById("20"));
let smallPictures = "100x100";
let mediumPictures = "500x500";
let largePictures = "1000x1000";
// let otherPictures : SquareSize = "200x200"; --> Error por no ser un valor definido
// ###################  Reto Union ########################
var Sizes;
(function (Sizes) {
    Sizes["small"] = "75x75";
    Sizes["medium"] = "240x180";
    Sizes["large"] = "500x375";
    Sizes["extraLarge"] = "1024x768";
    Sizes["superLarge"] = "3072x2304";
})(Sizes || (Sizes = {}));
const newSize = '500x375';
console.log("newSize : ", newSize);
