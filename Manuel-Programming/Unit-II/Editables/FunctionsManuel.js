//Manuel Medina

function addTwoNumbers(parameter1, parameter2){ //Expression;
    return parameter1 + parameter2;
};

function addTwoNumbers(parametro1, parametro2){
    return parametro1 + parametro2;
};

const addFullNumbers = function (){
    const numbers = [...arguments] //Copia de argumentos en la función - NO es un arreglo
    const add = numbers.reduce( function(acc, currentValue, CurrentIndex, array) {
        return acc = acc + currentValue;    
    }, acc = 0) //Callback - Función dentro de otra función
    return add;
};

/*const addFullNumbers = function (){
    const numeros = [...argumentos] //Copia de argumentos en la función - NO es un arreglo
    const add = numeros.reduce( function(acc, currentValue, CurrentIndex, array) {
        return acc = acc + currentValue;    
    }, acc = 0) //Callback - Función dentro de otra función
    return add;
};*/

console.log(addFullNumbers(4,8,2,10,20,10,93,12));

/* ERROR POR SENTENCIA?
function addTwoNumbers(parameter1, parameter2){ //Expression;
    return parameter1 + parameter2;
};

const addFullNumbers = function (){ // if var = undefined, it is not a function - ERROR POR SENTENCIA
    const numbers = [...arguments] //Copia de argumentos en la función - NO es un arreglo
    const add = numbers.reduce( function(acc, currentValue, CurrentIndex, array) {
        return acc = acc + currentValue;    
    }, acc = 0) //Callback - Función dentro de otra función
    return add;
};
*/
//REDUCE suma los valores de un arreglo guardando todo en un acumulador.

//Arrow Function - No se tiene la sentencia "function"

function getName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

function sayHello(callback, first, last){
    console.log(`Hola ${callback(first, last)}`);
}

sayHello(getName, "Manuel", "Carlos");

/*const arrowFunction = (parametro1, parametro2) => {return parametro1 + parametro2};
console.log(arrowFunction(2,5));*/

const arrowFunction = arg1 => arg1*2; //SENTENCIA - Marcan errores de sentencia
console.log(arrowFunction(2));