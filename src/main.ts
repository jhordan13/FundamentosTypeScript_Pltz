console.log("Soy el archivo main");

/* ######### Tipo number ######### */

// ---- Forma Explicita ----
let phone : number;
phone = 991211293;
// phone = "Hola"; --> No es posible asignar una cadena a variable de tipo numerico  

// ---- Forma Inferido -----
let phoneNumber = 991211293;
// phoneNumber = true; --> Error porque de forma implicita la variable "phoneNumber" es de tipo number

let hex : number = 0xf00d; // El tipo "number" acepta numeros hexadecimales iniciando el numero de la forma "0xnum_hexadecimal"
let binary : number = 0b101; // El tipo "number" acepta numeros binarios iniciando el numero de la forma "0bnum_binario"
let octal : number = 0o701; // El tipo "number" acepta numeros octales iniciando el numero de la forma "0onum_octal"

/* ######### Tipo Boolean ######### */

let isPro : boolean = true; // Declaracion explicita
let  isUserPro = false;     //Declaracion inferida
// isUserPro = 234; --> Error porque de forma implicita la variable "isUserPro" es de tipo boolean

/* ######### Tipo String ######### */

let userName : string = "Jordan13"; // Declaracion explicita
userName = "Paul13";
// userName = true; --> Error por ser de tipo string

let  myname = "Jordan";

/* 
###########################################
#           Template String   
############################################ 
* Permiten definir multiples lineas de texto
* Pueden contener expresiones o variables embebidas
* Se debe usar el caracter backtick/backquote(`) y para expresiones ${expr}
*/

let userInfo : string;

userInfo = `
  User info: 
  username: ${userName}
  firstName: ${myname+" Perez"}
  phone: ${phoneNumber}
  isPro: ${isPro}
`;

console.log("userInfo: ",userInfo);
