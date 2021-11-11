// Manuel Medina

var myInt = 30;
myFloat = 7.5;
myString = "Manuel";
var myNull = null;

//TypeCasting: imp----exp
console.log(typeof myFloat);
myFloat = String(myFloat);
console.log(typeof String(myFloat));

myString = Boolean(myString);
console.log(myString);

//Cuando se convierte en boolean se arroja un "true" o "false"

//False Values
console.log(Boolean(" ")); //true por un espacio
console.log(Boolean("")); //false porque no hay ningun caracter

//Cuando convertimos un dato a 0
console.log(Boolean(0));

//Not is a Number? ---> NaN
console.log(Boolean(NaN));

//undefinded
console.log(Boolean(undefined));

//En datos nulos
console.log(typeof myNull);
console.log(Boolean(false));

//True Values
console.log(Boolean("Manuel"));
console.log(Boolean(5));
console.log(Boolean({key:"5"}));
console.log(Boolean([]));

console.log(typeof myNull);

//When is a NaN
console.log(isNaN(Number("5x")));

//TypeCasting Expli Methods
console.log(Number.parseInt(myString));
console.log(Number.parseFloat(myString));

//TypeCasting cohersion implicit
var result = "Hola mundo"; //="Hola" + "mundo"
var resultNumberString = 2 + "Hola"; //Suma de un numero a un String
var resultNumberRemainder = 2 - "22"; //JavaScript toma las decisiones sin que el usuario se de cuenta

console.log(resultNumberString);
console.log(resultNumberRemainder);