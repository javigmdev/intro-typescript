//function
function sum(n1: number, n2: number): number {
    return n1 + n2;
}

//arrow function
const multiply = (n1: number, n2: number):number => {
    return n1 * n2;
}

/*
    Parameter order of a function:
        1. mandatory parameters
        2. optional parameters
        3. parameters with default value
*/
function calculateDiscount (price: number, product?:string, discount:number = 10): string {
    return 'Discount ' + product + ': ' + (price - discount);
}

console.log(sum(10,20));
console.log(multiply(10,20));
console.log(calculateDiscount(100));
console.log(calculateDiscount(100, 'mobile'));
console.log(calculateDiscount(100, 'mobile', 2));

//interface with function
interface Departament {
    name: string;
    number: number;
    printName: () => void;
}

const departament: Departament = {
    name: 'Oracle',
    number: 1,
    printName() {
        console.log('Name: ', this.name);
    }
}

departament.printName();