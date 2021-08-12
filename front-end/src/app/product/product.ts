export class Product { 
    id: number;
    name: string;
    imagesUrl: string[];
    price: number;
    code: string;
    options: options[];
    rating: number;
    description: string;
}

type options = {
    name: string;
    amount: number;
    price: number;
}