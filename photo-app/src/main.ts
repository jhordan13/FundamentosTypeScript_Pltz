// import { Album, PhotoOrientation, Picture, User } from "./photo-app"
import { User } from "./user";
import { Album } from "./album";
import { Picture } from "./picture";
import { PhotoOrientation } from "./photo-orientation";

const user = new User(1, "jordan13_", "Jordan", true);
const album = new Album(10, "Platzi Pictures");
const picture = new Picture(1, "My Gradiation", "2022-07", PhotoOrientation.Panorama);

// Creamos realciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log("user : ", user);

user.removeAlbum(album);
console.log("user : ", user);