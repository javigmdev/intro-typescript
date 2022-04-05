export interface Product {
    description: string;
    price: number;
}

export function calculateAvg( products: Product[]): [number, number, number] {
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, products.length,  total / products.length];
}