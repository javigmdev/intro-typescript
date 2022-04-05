interface Product {
    description: string;
    price: number;
}

const tablet: Product = {
    description: 'iPad',
    price: 600
}

const phone: Product = {
    description: 'Samsung Galaxy',
    price: 800
}

function calculateAvg( products: Product[]): [number, number, number] {
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, products.length,  total / products.length];
}

const products = [phone, tablet];
const [total, amount, avg] = calculateAvg(products);

console.log('Destructuring function arguments:');
console.log('Total: ' + total + ', Amount: ' + amount + ', Avg: ' + avg);