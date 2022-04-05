import { Product, calculateAvg } from './07-export';

const listProducts: Product[] = [
    {
        description: 'Phone 1',
        price: 100
    },
    {
        description: 'Phone 2',
        price: 300
    }
];


const [total, amount, avg] = calculateAvg(listProducts);
console.log('Total: ' + total + ', Amount: ' + amount + ', Avg: ' + avg);