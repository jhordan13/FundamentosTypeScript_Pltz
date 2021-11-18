/* 
######### Clase Abstracta #############
* Es aquella que esta fuera de contexto o no tiene sentido una instanciacion independiente de esta.
* "abstract" : Evita que podamos instanciar una clase que carece de sentido de forma independiente
*/

export{};

enum PhotoOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

/*
######### Modificadores de Acceso ###########
* publico : Acceso libre a cualquier clase
* protected : Acceso intermedio entre publico y privado, y que puede ser accedido desde su propia clase y las clases que la heredan 
* private : Acceso restringido unicamente con los metodos de acceso "set" y "get"
*/

// SUPERCLASE que contiene atributos comunes que heredaran otras clases
abstract class Item{

  protected _id : number;
  protected _title : string;
  
  constructor(id:number, title:string){
    this._id = id;
    this._title = title;
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

}


class Photo extends Item {

  // private _id: number; --> Ya definido en la SuperClase
  // private _title: string; --> Ya definido en la SuperClase
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    
    super(id, title); // Instanciamos el constructor de la superclase
    
    // this._id = id; --> Ya instanciado en el constructor de la SuperClase
    // this._title = title; --> Ya instanciado en el constructor de la SuperClase
    this._orientation = orientation;
  }

  // OBS: El nombre de un metodo get o set no debe coincidir con el nombre de alguna variable 

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

class Album extends Item{
  
  // private _id: number; --> Ya definido en la SuperClase
  // private _title: string; --> Ya definido en la SuperClase
  private pictures: Photo[]; // Definimos un atributo de un array de Pictures

  constructor(id: number, title: string) {

    super(id, title); // Instanciamos el constructor de la superclase

    // this._id = id; --> Ya instanciado en el constructor de la SuperClase
    // this._title = title; --> Ya instanciado en el constructor de la SuperClase
    this.pictures = [];
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

/*

!Una clase que no es ABSTRACTA permite ser instanciado

const item = new Item(1, "Test Title");
console.log("item : ", item);

*/