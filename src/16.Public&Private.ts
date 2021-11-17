/*
#################################################
#               Clase Publica
#################################################
* Si no hay especificacion del tipo de una clase esta siempre sera publica
*/

export {};

enum PhotoOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

class Picture {
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }

}

class Album {
  
  public id: number;
  public title: string;
  public pictures: Picture[]; // Definimos un atributo de un array de Pictures

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(10, 'Personal Pictures');
const newPicture : Picture = new Picture(1, "My graduation",PhotoOrientation.Square);
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

enum PhotoOrientation_ {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

class Photo {
  private id: number;
  private title: string;
  private orientation: PhotoOrientation_;

  constructor(id: number, title: string, orientation: PhotoOrientation_) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }

}

class Album_ {
  
  private id: number;
  private title: string;
  private pictures: Photo[]; // Definimos un atributo de un array de Pictures

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(photo: Photo) {
    this.pictures.push(photo);
  }
}

const album_: Album_ = new Album_(10, 'Personal Pictures');
const newPhoto : Photo = new Photo(1, "My graduation",PhotoOrientation_.Square);
album_.addPicture(newPhoto);

// Accediendo a los atributos publicos
// newPhoto.id = 500; --> Error
// newPhoto.title = "My Other Birthday"; --> Error
// album_.title = "Other Great Moments"; --> Error

console.log("album_ : ",album_);
