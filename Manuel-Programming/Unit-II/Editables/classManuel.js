
class student {
    constructor(){ // Lo primero que se va a ejecutar
    }
    greeting(){
        console.log(`Hola amigo!`);
        }
    };

// Instanciar un objeto
//const Manuel = new student();
//Manuel.greeting();


// Import (chalk) from "chalk";


class Device {
    constructor(Name, model, NumLeds, location){ // Lo primero que se va a ejecutar
        this.name = Name;
        this.model = model;
        this.NumLeds = NumLeds;
        this.location = location;
    }
    turnOnLed(){
        console.log(`LED turned on...`);
        }
    };

// Instanciar un objeto
const Manuel = new Device("Mi primer dispositivo", "Samsung Galaxy S3", 2, 1000); //<---- Esto es el constructor
Manuel.turnOnLed();