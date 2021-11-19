"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Album, PhotoOrientation, Picture, User } from "./photo-app"
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, "jordan13_", "Jordan", true);
const album = new album_1.Album(10, "Platzi Pictures");
const picture = new picture_1.Picture(1, "My Gradiation", "2022-07", photo_orientation_1.PhotoOrientation.Panorama);
// Creamos realciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log("user : ", user);
user.removeAlbum(album);
console.log("user : ", user);
