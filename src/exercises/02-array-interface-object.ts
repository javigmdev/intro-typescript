
//array
let programmingLanguages = ['js','java','angular'];

//interface
interface Language {
    name: string;
    age: number;
    versions: number[];
    deprecated?: boolean; // ? optional 
}

//object
const java:Language = {
    name: 'Java',
    age: 1995,
    versions: [6, 8, 11]
};

java.deprecated = false;

console.table(java);