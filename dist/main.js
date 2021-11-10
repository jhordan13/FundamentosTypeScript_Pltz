"use strict";
console.log("Soy el archivo main");
/* ######### Tipo number ######### */
// ---- Forma Explicita ----
var phone;
phone = 991211293;
// phone = "Hola"; --> No es posible asignar una cadena a variable de tipo numerico  
// ---- Forma Inferido -----
var phoneNumber = 991211293;
// phoneNumber = true; --> Error porque de forma implicita la variable "phoneNumber" es de tipo number
var hex = 0xf00d; // El tipo "number" acepta numeros hexadecimales iniciando el numero de la forma "0xnum_hexadecimal"
var binary = 5; // El tipo "number" acepta numeros binarios iniciando el numero de la forma "0bnum_binario"
var octal = 449; // El tipo "number" acepta numeros octales iniciando el numero de la forma "0onum_octal"
/* ######### Tipo Boolean ######### */
var isPro = true; // Declaracion explicita
var isUserPro = false; //Declaracion inferida
// isUserPro = 234; --> Error porque de forma implicita la variable "isUserPro" es de tipo boolean
/* ######### Tipo String ######### */
var userName = "Jordan13"; // Declaracion explicita
userName = "Paul13";
// userName = true; --> Error por ser de tipo string
var myname = "Jordan";
/*
###########################################
#           Template String
############################################
* Permiten definir multiples lineas de texto
* Pueden contener expresiones o variables embebidas
* Se debe usar el caracter backtick/backquote(`) y para expresiones ${expr}
*/
var userInfo;
userInfo = "\n  User info: \n  username: " + userName + "\n  firstName: " + (myname + " Perez") + "\n  phone: " + phoneNumber + "\n  isPro: " + isPro + "\n";
console.log("userInfo: ", userInfo);
