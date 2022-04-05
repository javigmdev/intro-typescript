interface Song {
    duration: number;
    title: string;
    author: Author 
}

interface Author {
    surname: string;
    year: number;
}

const song: Song = {
    duration: 120,
    title: 'Why do we fall?',
    author: {
        surname: 'Zimmer',
        year: 64
    }
}

const { duration, title, author } = song;
const { surname } = author;

console.log('Destructuring objects:')
console.log('Duration:' + duration + ', Title:' + title +  ', Surname:'+ surname);

//Arrays destructuring
const musicians: string[] = ['Zimmer','Williams','Morricone'];

console.log('Array musicians: ' + musicians[0] + ', ' + musicians[1] + ', ' + musicians[2]);
console.log('Destructuring arrays:');
//const [zimmer , williams , morricone ] = musicians;
const [ , , morricone ] = musicians;
//console.log('Musician 0: ', zimmer);
//console.log('Musician 1: ', williams);
console.log('Musician 2: ', morricone);