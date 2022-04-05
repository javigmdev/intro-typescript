interface SuperHero {
    name: string;
    age: number;
    direction: Direction;
    printDirection: () => string;
}

interface Direction {
    street: string;
    city: string;
    country: string;
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    direction: {
        street: 'Main St',
        city: 'NY',
        country: 'USA',
    },
    printDirection(){
        return this.direction.street + ',' + this.direction.city + ',' + this.direction.country;
    }
}

console.log(superHero.printDirection());