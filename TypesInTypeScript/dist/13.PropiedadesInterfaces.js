var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 10] = "landscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 11] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 12] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 13] = "panorama"; // 13
})(PhotoOrientation || (PhotoOrientation = {}));
function generatePicture(config) {
    const pic = { title: "Default", date: "2020-07", };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let pict = generatePicture({}); //No necesitamos definir todas las propiedades en el objeto
console.log("picture :", pict);
pict = generatePicture({ title: "Test title" });
console.log("picture :", pict);
pict = generatePicture({ title: "Another Test title", date: "2021-11" });
console.log("picture :", pict);
let usr; // Definimos una variable de tipo "objeto User"
usr = { id: 10, username: "jordan13", isPro: true };
console.log("user :", usr);
usr.username = "jor_sk";
// usr.id = 21; --> Error
console.log("user :", usr);
