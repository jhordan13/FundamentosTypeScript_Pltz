"use strict";
// ######### Herencia  : Uso de "extends" #############
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
/*
######### Modificadores de Acceso ###########
* publico : Acceso libre a cualquier clase
* protected : Acceso intermedio entre publico y privado, y que puede ser accedido desde su propia clase y las clases que la heredan
* private : Acceso restringido unicamente con los metodos de acceso "set" y "get"
*/
// SUPERCLASE que contiene atributos comunes que heredaran otras clases
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
}
class Photo extends Item {
    constructor(id, title, orientation) {
        super(id, title); // Instanciamos el constructor de la superclase
        // this._id = id; --> Ya instanciado en el constructor de la SuperClase
        // this._title = title; --> Ya instanciado en el constructor de la SuperClase
        this._orientation = orientation;
    }
    // OBS: El nombre de un metodo get o set no debe coincidir con el nombre de alguna variable 
    get orientation() {
        return this._orientation;
    }
    set orientation(newOrientation) {
        this._orientation = newOrientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;
    }
}
class Album extends Item {
    constructor(id, title) {
        super(id, title); // Instanciamos el constructor de la superclase
        // this._id = id; --> Ya instanciado en el constructor de la SuperClase
        // this._title = title; --> Ya instanciado en el constructor de la SuperClase
        this.pictures = [];
    }
    addPicture(photo) {
        this.pictures.push(photo);
    }
}
const album = new Album(10, 'Personal Pictures');
const newPhoto = new Photo(1, "My graduation", PhotoOrientation.Square);
album.addPicture(newPhoto);
// Accediendo a los atributos publicos
newPhoto.id = 500; // <> set id()
console.log("newPhoto.id", newPhoto.id); // <> get id()
newPhoto.title = "My Other Birthday"; // <> set title()
console.log("newPhoto.title", newPhoto.title); // <> get title()
album.title = "Other Great Moments"; // <> set title()
console.log("album : ", album);
