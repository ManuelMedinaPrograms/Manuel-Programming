/*
const myObj = {
    name: "Manuel,
    age: 19,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

myObj.greeting("Hola Mundo"); 


for (let i of Object.values(myObj)){ //No puedo saber su 'key', es un dato puro
    console.log(i);
};
*/
const student = {
    name: undefined,
    age: 19,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const Manuel = Object.create(student);
Manuel.name = "Manuel Medina";
Manuel.age = 19;
Manuel.greeting("Hola Mundo");

const Carlos = Object.create(student);
Carlos.name = "Carlos Alberto";
Carlos.age = 19;
Carlos.greeting("Hello World");
Carlos.programming = function(problem) {
    //Logical and computing
    console.log("Programando para solucionar un problema " + problem);
};

Carlos.programming("Creando una asombrosa aplicacion web");

console.log(this); //Global - todas las funciones que nos permite usar