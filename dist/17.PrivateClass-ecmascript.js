"use strict";
/*
##### Private Class en EcmaScript6 #############
* Sintaxis : private <> #
* Estructura : #private_atrib;
*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Photo_id, _Photo_title, _Photo_orientation, _Album__id, _Album__title, _Album__pictures;
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation_;
(function (PhotoOrientation_) {
    PhotoOrientation_["Landscape"] = "Landscape";
    PhotoOrientation_["Portrait"] = "Portrait";
    PhotoOrientation_["Square"] = "Square";
    PhotoOrientation_["Panorama"] = "Panorama";
})(PhotoOrientation_ || (PhotoOrientation_ = {}));
class Photo {
    constructor(id, title, orientation) {
        _Photo_id.set(this, void 0);
        _Photo_title.set(this, void 0);
        _Photo_orientation.set(this, void 0);
        __classPrivateFieldSet(this, _Photo_id, id, "f");
        __classPrivateFieldSet(this, _Photo_title, title, "f");
        __classPrivateFieldSet(this, _Photo_orientation, orientation, "f");
    }
    // Comportamiento
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _Photo_id, "f")}, title: ${__classPrivateFieldGet(this, _Photo_title, "f")}, orientation: ${__classPrivateFieldGet(this, _Photo_orientation, "f")}]`;
    }
}
_Photo_id = new WeakMap(), _Photo_title = new WeakMap(), _Photo_orientation = new WeakMap();
class Album_ {
    constructor(id, title) {
        _Album__id.set(this, void 0);
        _Album__title.set(this, void 0);
        _Album__pictures.set(this, void 0); // Definimos un atributo de un array de Pictures
        __classPrivateFieldSet(this, _Album__id, id, "f");
        __classPrivateFieldSet(this, _Album__title, title, "f");
        __classPrivateFieldSet(this, _Album__pictures, [], "f");
    }
    addPicture(photo) {
        __classPrivateFieldGet(this, _Album__pictures, "f").push(photo);
    }
}
_Album__id = new WeakMap(), _Album__title = new WeakMap(), _Album__pictures = new WeakMap();
const album_ = new Album_(10, 'Personal Pictures');
const newPhoto = new Photo(1, "My graduation", PhotoOrientation_.Square);
album_.addPicture(newPhoto);
// Accediendo a los atributos publicos
// newPhoto.id = 500; --> Error
// newPhoto.title = "My Other Birthday"; --> Error
// album_.title = "Other Great Moments"; --> Error
console.log("album : ", album_);
