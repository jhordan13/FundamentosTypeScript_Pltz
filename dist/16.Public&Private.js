"use strict";
/*
#################################################
#               Clase Publica
#################################################
* Si no hay especificacion del tipo de una clase esta siempre sera publica
*/
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(10, 'Personal Pictures');
const newPicture = new Picture(1, "My graduation", PhotoOrientation.Square);
album.addPicture(newPicture);
// Accediendo a los atributos publicos
newPicture.id = 100;
newPicture.title = "My Birthday";
album.title = "Great Moments";
/*
#################################################
#               Clase Privada
#################################################
*/
var PhotoOrientation_;
(function (PhotoOrientation_) {
    PhotoOrientation_["Landscape"] = "Landscape";
    PhotoOrientation_["Portrait"] = "Portrait";
    PhotoOrientation_["Square"] = "Square";
    PhotoOrientation_["Panorama"] = "Panorama";
})(PhotoOrientation_ || (PhotoOrientation_ = {}));
class Photo {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
class Album_ {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(photo) {
        this.pictures.push(photo);
    }
}
const album_ = new Album_(10, 'Personal Pictures');
const newPhoto = new Photo(1, "My graduation", PhotoOrientation_.Square);
album_.addPicture(newPhoto);
// Accediendo a los atributos publicos
// newPhoto.id = 500; --> Error
// newPhoto.title = "My Other Birthday"; --> Error
// album_.title = "Other Great Moments"; --> Error
console.log("album_ : ", album_);
