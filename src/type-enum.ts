/* ######################## Tipo de dato Enum ######################## */

// ######### Enum para valores numericos ###############

// Asociamos claves(keys) a una enumeracion de que inicia en 3
// OBS: Si no definimos un valor inicial toma 0 por defecto
enum Direction{
  Up = 3,
  Down,
  Left,
  Right
}

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

const arriba : Direction = Direction.Up; // arriba = 3
console.log("arriba : ", arriba);
console.log("derecha : ", Direction[arriba]);

// ######### Enum para valores string ###############

enum Country {
  Brasil = "bra",
  Argentina = "arg",
  Colombia = "col",
  Peru = "per",
  Venezuela = "ven"
}

const country : Country = Country.Peru;
console.log("country : ", country);

// ############ Unimos 2 enum en un Objeto ############## 

enum DiasLaborales {
  Lunes = 'MON',
  Martes = 'TUE',
  Miercoles = 'WED',
  Jueves = 'THU',
  Viernes = 'FRI'
}

enum DiasFinSemana {
  Sabado = 'SAT',
  Domingo = 'SUN'
}

const Semana = {
  ...DiasLaborales,
  ...DiasFinSemana
}

console.log(Semana.Lunes); // MON
console.log(Semana.Sabado); // SAT

// OBS: La manera de extender un enum es simplemente asignando nuevos valores al enum que queremos extender, es decir:

enum Color {
  Red,
  Green,
  Blue
}

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue
}