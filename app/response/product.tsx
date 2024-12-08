export default interface Product {
    id: number;
    description: string;
    brand: string;
    price: number;
    imageLink: string;
    quantity?: number;
}