function getGenericType<T>(argument: T){
    return argument;
}

let stringType = getGenericType('Hola Mundo');
let numberType = getGenericType(100);
let arrayType = getGenericType([1,2,3,4]);