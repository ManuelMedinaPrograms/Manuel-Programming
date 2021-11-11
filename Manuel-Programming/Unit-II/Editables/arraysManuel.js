var myArray = [1,2,3,4,5];
var myArray2 = new Array(1,2,3);

//Longitud de Arrays
const ln = myArray.length;
console.log(ln);

const ln2 = myArray2.length;
console.log(ln2);

//Show Array
console.log(myArray);
console.log(myArray2);

//Iterative Arrays

for(let i = 0; i<ln; i++){
    console.log("Primer numero: " + myArray[0]);
    };
    console.log("---");
    for(let i in myArray){
    console.log("Segundo numero: " + myArray[2]);
    }
    console.log("---");
    for(let i of myArray){
    console.log("Tercer numero: " + myArray[4]);
    }

    for(let i = 0; i<ln; i++){
        console.log("Primer numero: " + myArray2[0]);
        };
        console.log("---");
        for(let i in myArray2){
        console.log("Segundo numero: " + myArray2[1]);
        }
        console.log("---");
        for(let i of myArray2){
        console.log("Tercer numero: " + myArray2[2]);
        }
    
    //Adding elements;
    let data = [];
    console.log(data);
    const temp = 27;
    data.push(temp);
    data.push(12);
    data.push(60);
    console.log(data);

    let data2 = [];
    console.log(data2);
    const temp2 = 27;
    data.push(temp2);
    data.push(15);
    data.push(100);
    console.log(data2);
    
    //Insert first elementsdata.unshift(12);
    console.log(data);
    console.log(data2);
    
    //Insert multiple data
    data.splice(2,0, 3, 4);     //data.splice fue creado originalmente para eliminar datos
    console.log(data);

    data2.splice(4,1, 6, 8);
    console.log(data2);
    
    //Delate elements - Modificaciones de arreglos
    data.pop();     //.pop elimina el último dato;
    console.log(data);
    data2.pop();
    console.log(data2);
    
    data.shift();   //Eliminar el primer elemento;
    console.log(data);
    data2.shift();
    console.log(data2)
    
    data.splice(1,3, 500); 
    console.log(data);
    data2.splice(2,6, 300);
    console.log(data2);
    
    
//Copiar
    
var friends = ["Luis", "Rafael", "Carla"];
var friends2 = ["Angel", "Ernesto", "Magdaly"];
//Quiero copiar este Array

//var bestFriend = [...friends];  //Generar una copia, pero los cambios se hacen en la copia
var bestFriend = friends.slice(1);  //Cuando hay un número se omite el shift
console.log(friends);

var bestFriend2 = friends2.slice(1);  //Cuando hay un número se omite el shift
console.log(friends2);
//bestFriend.shift();

//console.log(friends);
console.log(bestFriend);
console.log(bestFriend2);

//Quiero restar dos unidades a todos los items;
var edades = [20, 22, 23, 24];
edades = edades.map(function (currentValue, index) {
    return currentValue - 2;
})

console.log(edades);

var edades2 = [30, 32, 33, 44];
edades2 = edades2.map(function (currentValue, index) {
    return currentValue - 2;
})

console.log(edades2);