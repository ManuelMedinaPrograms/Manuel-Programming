var module = "Este es mi modulo.";

export default class dataTypesManuel{
    constructor(){
        this.validateWord = "Hello";
        console.log(validateWord);
    };
}

export function validateWord(variable, palabra){
    if(variable.includes(palabra)){
        return true;
    };
    return false;
}

export {validateWord, module};