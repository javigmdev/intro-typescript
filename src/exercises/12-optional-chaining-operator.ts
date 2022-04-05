interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fran'
}

const passenger2: Passenger = {
    name: 'Jon',
    children: ['Jake','Harry']
}

function printChildren(passenger: Passenger): void {
    
    //Optional chaining ?: allow to write code which can immediately stop running expressions when it hits a null or undefined
    const numberChildren = passenger.children?.length || 0;
    console.log(numberChildren);
}


printChildren(passenger1);