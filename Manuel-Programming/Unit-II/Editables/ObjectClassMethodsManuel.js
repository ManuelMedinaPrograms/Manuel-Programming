const student = {
    name: "Manuel",
    age: 19,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const cpyStudent = Object.assign(student); //Generar una copia de las mismas direcciones con la misma info? - {...student} también se puede usar..
cpyStudent.name = "Fernando";
console.log(student);
console.log(cpyStudent);

/*
const cpyStudent = Object.create(student); //Generar una copia de las mismas direcciones con la misma info?
cpyStudent.name = "Fernando";
console.log(student);
console.log(cpyStudent)
*/ 

const estudiante = {
    nombre: "Manuel",
    edad: 19,
    greeting: function(mensaje) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${mensaje} soy ${this.nombre} y tengo ${this.edad}`);
        console.log(mensaje);
    },
};

const cpyEstudiante = Object.assign(estudiante); //Generar una copia de las mismas direcciones con la misma info? - {...student} también se puede usar..
cpyEstudiante.nombre = "Manuel";
console.log(estudiante);
console.log(cpyEstudiante);