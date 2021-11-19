"use strict";
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
const newPicture1 = new Picture(1, "My graduation", PhotoOrientation.Square);
const newPicture2 = new Picture(2, "Big party", PhotoOrientation.Panorama);
const newPicture3 = new Picture(3, "New Job", PhotoOrientation.Portrait);
album.addPicture(newPicture1);
album.addPicture(newPicture2);
album.addPicture(newPicture3);
console.log("album : ", album);
