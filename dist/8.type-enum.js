/* ######################## Tipo de dato Enum ######################## */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// ######### Enum para valores numericos ###############
// Asociamos claves(keys) a una enumeracion de que inicia en 3
// OBS: Si no definimos un valor inicial toma 0 por defecto
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 3] = "Up";
    Direction[Direction["Down"] = 4] = "Down";
    Direction[Direction["Left"] = 5] = "Left";
    Direction[Direction["Right"] = 6] = "Right";
})(Direction || (Direction = {}));
// Obtenemos los valores
console.log("Direction.Up : ", Direction.Up);
console.log("Direction.Down : ", Direction.Down);
console.log("Direction.Left : ", Direction.Left);
console.log("Direction.Right : ", Direction.Right);
// Obtenemos las claves
console.log("Direction[3] : ", Direction[3]);
console.log("Direction[4] : ", Direction[4]);
console.log("Direction[5] : ", Direction[5]);
console.log("Direction[6] : ", Direction[6]);
var arriba = Direction.Up; // arriba = 3
console.log("arriba : ", arriba);
console.log("derecha : ", Direction[arriba]);
// ######### Enum para valores string ###############
var Country;
(function (Country) {
    Country["Brasil"] = "bra";
    Country["Argentina"] = "arg";
    Country["Colombia"] = "col";
    Country["Peru"] = "per";
    Country["Venezuela"] = "ven";
})(Country || (Country = {}));
var country = Country.Peru;
console.log("country : ", country);
// ############ Unimos 2 enum en un Objeto ############## 
var DiasLaborales;
(function (DiasLaborales) {
    DiasLaborales["Lunes"] = "MON";
    DiasLaborales["Martes"] = "TUE";
    DiasLaborales["Miercoles"] = "WED";
    DiasLaborales["Jueves"] = "THU";
    DiasLaborales["Viernes"] = "FRI";
})(DiasLaborales || (DiasLaborales = {}));
var DiasFinSemana;
(function (DiasFinSemana) {
    DiasFinSemana["Sabado"] = "SAT";
    DiasFinSemana["Domingo"] = "SUN";
})(DiasFinSemana || (DiasFinSemana = {}));
var Semana = __assign(__assign({}, DiasLaborales), DiasFinSemana);
console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT
// OBS: La manera de extender un enum es simplemente asignando nuevos valores al enum que queremos extender, es decir:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    Color[Color["DarkRed"] = 3] = "DarkRed";
    Color[Color["DarkGreen"] = 4] = "DarkGreen";
    Color[Color["DarkBlue"] = 5] = "DarkBlue";
})(Color || (Color = {}));
