/*
##############################
#        INTERFACES          #
##############################
Una interface es una estructura que funciona como un CONTRATO , en el que se especifica las cosas que debe contener
una clase para que pueda implementar una interfaz o cumplir el contrato declarado por esa interfaz , ese contrato
declara una serie de metodos y propiedades que deben ser implementados luego por una o mas clases. Al declarar
una clase respecto a una interfaz , ésta actua como validadora de la clase de que todos los metodos y/o propiedades
que se definieron en la interfaz sean implementadas en la clase.
La diferencia entre "extender de otra clase" o "implementar una interface" es que al implementar una interfaz, esta no
contiene la implementacion de los metodos y deben ser implementados en la clase.
*/
// ----------- Implementacion SIN Interface -----------------
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 10] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 11] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 12] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 13] = "Panorama"; // 13
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
// Creamos nuestro objeto para pasar como parametro a la funcion
let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
// Creamos un objeto al momento de declarar la funcion
showPicture({ title: "Test title", date: "2020-03", orientation: PhotoOrientation.Square });
function newShowPicture(picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
// Creamos nuestro objeto para pasar como parametro a la funcion
let newPic = {
    title: 'New title',
    date: '2021-03',
    orientation: PhotoOrientation.Panorama
};
showPicture(newPic);
