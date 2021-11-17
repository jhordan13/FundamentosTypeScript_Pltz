export {};

enum PhotoOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

class Picture {
  id: number;
  title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
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
  id: number;
  title: string;
  pictures: Picture[]; // Definimos un atributo de un array de Pictures

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(10, 'Personal Pictures');
const newPicture1 : Picture = new Picture(1, "My graduation",PhotoOrientation.Square);
const newPicture2 : Picture = new Picture(2, "Big party",PhotoOrientation.Panorama);
const newPicture3 : Picture = new Picture(3, "New Job",PhotoOrientation.Portrait);
album.addPicture(newPicture1);
album.addPicture(newPicture2);
album.addPicture(newPicture3);

console.log("album : ",album);