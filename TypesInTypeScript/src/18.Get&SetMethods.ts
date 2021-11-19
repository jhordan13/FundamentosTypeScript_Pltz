// ######### Modificadores de Acceso : Get y Set #############

export{};

enum PhotoOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

class Photo {
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  // OBS: El nombre de un metodo get o set no debe coincidir con el nombre de alguna variable 

  get id(){
    return this._id;
  }

  set id(newId: number){
    this._id = newId;
  }

  get title(){
    return this._title;
  }

  set title(newTitle: string){
    this._title = newTitle;
  }

  get orientation(){
    return this._orientation;
  }

  set orientation(newOrientation: PhotoOrientation){
    this._orientation = newOrientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`;
  }

}

class Album {
  
  private _id: number;
  private _title: string;
  private pictures: Photo[]; // Definimos un atributo de un array de Pictures

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this.pictures = [];
  }

  get id(){
    return this._id;
  }

  set id(newId: number){
    this._id = newId;
  }

  get title(){
    return this._title;
  }

  set title(newTitle: string){
    this._title = newTitle;
  }

  public addPicture(photo: Photo) {
    this.pictures.push(photo);
  }
}

const album: Album = new Album(10, 'Personal Pictures');
const newPhoto : Photo = new Photo(1, "My graduation",PhotoOrientation.Square);
album.addPicture(newPhoto);

// Accediendo a los atributos publicos
newPhoto.id = 500;  // <> set id()
console.log("newPhoto.id",newPhoto.id); // <> get id()
newPhoto.title = "My Other Birthday"; // <> set title()
console.log("newPhoto.title",newPhoto.title); // <> get title()

album.title = "Other Great Moments"; // <> set title()
console.log("album : ",album);
