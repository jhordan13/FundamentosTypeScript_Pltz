"use strict";
// ######### Modificadores de Acceso : Get y Set #############
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Photo {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    // OBS: El nombre de un metodo get o set no debe coincidir con el nombre de alguna variable 
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
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = [];
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
