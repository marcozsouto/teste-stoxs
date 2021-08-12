export class CartProduct { 
    id: number;
    name: string;
    imagesUrl: string;
    price: number;
    code: string;
    options: Options;
    rating: number;
    description: string;
}

type Options = {
    name: string;
    amount: number;
    price: number;
}