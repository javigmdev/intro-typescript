class Person {
    constructor(
        public name: string, 
        public direction: string
    ){}
}

class Hero extends Person {
    constructor(
        public name:string,
        public age:number,
        public realName:string
    ) {
        super(realName, "NY, USA");
    }
}

const hero = new Hero('Ironman', 50, 'Tony');
console.log(hero);

