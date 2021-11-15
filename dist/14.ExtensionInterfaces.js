var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 0] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 1] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 2] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 3] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
var album = {
    id: 1,
    title: 'Meetups',
    descripcion: 'Community events around the world'
};
var photo = {
    id: 1,
    title: 'Family',
    orientation: PictureOrientation.Landscape
};
var newPicture = {};
newPicture.id = 2;
newPicture.title = "Moon";
console.log("album : ", album);
console.log("photo : ", photo);
console.log("newPicture : ", newPicture);
