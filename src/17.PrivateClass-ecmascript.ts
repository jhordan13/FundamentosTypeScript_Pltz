/*
##### Private Class en EcmaScript6 #############
* Sintaxis : private <> # 
* Estructura : #private_atrib;
*/

export {};

enum PhotoOrientation_ {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

class Photo {
  #id: number;
  #title: string;
  #orientation: PhotoOrientation_;

  constructor(id: number, title: string, orientation: PhotoOrientation_) {
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.#id}, title: ${this.#title}, orientation: ${this.#orientation}]`;
  }

}

class Album_ {
  
  #id: number;
  #title: string;
  #pictures: Photo[]; // Definimos un atributo de un array de Pictures

  constructor(id: number, title: string) {
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }

  public addPicture(photo: Photo) {
    this.#pictures.push(photo);
  }
}

const album_: Album_ = new Album_(10, 'Personal Pictures');
const newPhoto : Photo = new Photo(1, "My graduation",PhotoOrientation_.Square);
album_.addPicture(newPhoto);

// Accediendo a los atributos publicos
// newPhoto.id = 500; --> Error
// newPhoto.title = "My Other Birthday"; --> Error
// album_.title = "Other Great Moments"; --> Error

console.log("album : ",album_);