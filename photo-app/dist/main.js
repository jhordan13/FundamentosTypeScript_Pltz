"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, "jordan13_", "Jordan", true);
var album = new photo_app_1.Album(10, "Platzi Pictures");
var picture = new photo_app_1.Picture(1, "My Gradiation", "2022-07", photo_app_1.PhotoOrientation.Panorama);
// Creamos realciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log("user : ", user);
