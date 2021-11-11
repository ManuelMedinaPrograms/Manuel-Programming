const BMW = {
    name: "BMW",
    type: "Automovil",
    friends: ["Mercedes", "Ferrari", "Corvette"],
    drive: function (){
        console.log("BMW is driving...");
        return;
    },
};

for (key in BMW){
    console.log(`${key}: ${BMW[key]}`);
};

console.log(Object.keys(BMW));

console.log(Object.getOwnPropertyNames(BMW));