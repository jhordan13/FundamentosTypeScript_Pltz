enum PictureOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  // copia de los atributos de Entity
  descripcion: string;
}

interface Photo extends Entity{
  // copia de los atributos de Entity
  orientation: PictureOrientation
}
const album: Album = {
  id: 1,
  title: 'Meetups',
  descripcion: 'Community events around the world'
};
const photo: Photo = {
  id: 1,
  title: 'Family',
  orientation: PictureOrientation.Landscape
};

const newPicture = {} as Photo;
newPicture.id = 2;
newPicture.title = "Moon";

console.log("album : ",album);
console.log("photo : ",photo);
console.log("newPicture : ",newPicture);