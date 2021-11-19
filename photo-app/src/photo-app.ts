/*
#######  Mecanismos de reutilizacion de Codigo #########
* EXPORT : Exponer nuestro estructura (clase , interface, ...) para poder hacer uso del mismo desde otros archivos u otros modulos 
* IMPORT : Nos permite acceder a clases que se encuentran disponibles o expuestas para ser usadas
*/

export enum PhotoOrientation {
  Landscape ,
  Portrait ,
  Square ,
  Panorama
}

export class User {
	private album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album) {
		this.album.push(album);
	}
}

export class Item {
	constructor(public readonly id: number, protected title: string) {}
}

export class Album extends Item {
	private pictures: Picture[];

	public constructor(id: number, title: string) {
		super(id, title);
		this.pictures = [];
	}
	public addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

export class Picture extends Item {
	public constructor(id: number, title: string, private date: string, private orientation: PhotoOrientation) {
		super(id, title);
	}
	public toString() {
		return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
	}
}