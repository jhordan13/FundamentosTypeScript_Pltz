/* ########### Aserciones de Tipo :  ############ */
// Son mecanismos de conversión de tipos de datos. Se parece al casting de tipos en otros lenguajes de programación.
// ####### Sintaxis <> : Angle Bracket syntax ############
// NOTACION : <type> variable
var nickname;
nickname = "jordan13";
var message = nickname.length > 5 ? "Bienvenido " + nickname : "Nickname demasiado corto";
console.log("nickname : ", nickname);
// ####### Sintaxis "as" #########
var otherMessage = nickname.length > 5 ? "Bienvenido " + nickname : "Nickname demasiado corto";
console.log("nickname : ", nickname);
var helloUser = "Hola Jordan";
var anotherMessage = helloUser.substring(5);
console.log("Persona : ", anotherMessage);
/*
! OBS: Diferencia de una Asercion de Tipo (Cast) y la Conversion de un tipo de dato a otro
Sabemos que para hacer una Asercion de Tipo podemos usar la forma "<type>variable" o la forma "variable as type" pero
solo funciona cuando el tipo que se castea es una subclase de la clase casteada o si existe una conversion explicita
de la segunda clase a la primera (por ejemplo, de long a int). Pero no puedes castear de string a int porque no se
cumple ninguna de las condiciones anteriores.
Mientras que para realizar una conversion solo funciona si el argumento es una de las clases expresamente previstas
en la definición de la clase convert. Por ejemplo, de string a int sí que funciona, pero no podrías convertir de una
clase madre a una subclase con el Convert.
*/
/*
* Ejemplo 1 : Diferencia de castear una variable tipo "number" a "string" y convertir un "number" a "string"

let var1 : number = 10;
let var2 : string = <string>var1; // Muestra un error en tiempo de compilacion y ejecucion
let var3 : string = String(var1); // Conversion correcta
*/
// Ejemplo 2 : No es posible castear un "any" que almacena un valor "number" hacia un "string", ya que devolvera "undefined"
var dni = 73436473;
var castDni = dni; // Muestra un error en tiempo de ejecucion mas no de compilacion
var convertDni = String(dni); // Conversion correcta
console.log(castDni.length); //Output : Undefined
console.log(convertDni.length); //Output : 8
