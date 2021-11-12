/* ######################## Tipo de dato Null ######################## */
// Declaracion Explicita
var nullVariable;
nullVariable = null;
// nullVariable = "Incorrecto"; --> Declaracion incorrecta para el compilador pero que si se puede ejecutar
var otherVariable = null; //Variable de tipo any que toma el valor null
otherVariable = "test";
console.log("nullVariable :", nullVariable);
console.log("otherVariable :", otherVariable);
// OBS: Otra forma de imprimir usando la variable
console.log({ nullVariable: nullVariable, otherVariable: otherVariable });
/* ######################## Tipo de dato Undefined ######################## */
// Declaracion Explicita
var undefinedVariable = undefined;
// undefinedVariable = "test"; --> Error
var otherUndefined = undefined; //Variable de tipo any que tomar valor undefined
otherUndefined = 100;
console.log("undefinedVariable: ", undefinedVariable);
console.log("otherUndefined", otherUndefined);
// OBS: Otra forma de imprimir usando la variable
console.log({ undefinedVariable: undefinedVariable, otherUndefined: otherUndefined });
/* ######################## Null y Undefined como Subtipos ######################## */
var albumName;
albumName = null;
albumName = undefined;
