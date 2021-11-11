//Manuel Medina

const dispositivo = {
    sensorModel: "H500",
    count: 0,
    date: new Date(),
};

console.log(dispositivo.date);
console.log(dispositivo.date.getFullYear(), typeof dispositivo);

const dispositivoJSON = JSON.stringify(dispositivo);
console.log(dispositivoJSON, typeof dispositivoJASON);

//Crear un json desde code//
const myJson = '{"name": "Manuel", "edad": "19", "amigos": ["Maximiliano", "Adrian"], "isManager": false}';
console.log(myJson, typeof myJson);

//Manipular json format
//Convertir un 'json' a un objeto en JS
const myObj = JSON.parse(myJson);
console.log(myObj.name);
