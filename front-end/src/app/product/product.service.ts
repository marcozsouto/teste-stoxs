import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProductService { 

    private courseURL: string = 'http://localhost:8080'

    constructor(private HttpClient: HttpClient){}

    retrieveAll(): Product[] {
        return PRODUCTS;
    }


    retrieveById(id: number): Product {
        return PRODUCTS.find((productIterable: Product) => productIterable.id === id);
    }

    save(product: Product): void {
        
        if(product.id){
            const index = PRODUCTS.findIndex((productIterable: Product) => productIterable.id === product.id);
            PRODUCTS[index] = product;
        } 
    }
}
var PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Pokemon",
        imagesUrl: [
            "shop-details/product-big-2.png",
            "shop-details/product-big-3.png",
        ],
        price: 78.45,
        code: "4ADD5646",
        options: [
            {
                name: 'P',
                amount: 45,
                price: 23
            },
            {
                name: 'M',
                amount: 45,
                price: 23
            }
        ],
        rating: 4.5,
        description: "string",
    },
    {
        id: 2,
        name: "Bleach",
        imagesUrl: [
            "shop-details/product-big-2.png",
            "shop-details/product-big-3.png",
        ],
        price: 48.45,
        code: "ASDAS",
        options: [{
            name: 'P',
            amount: 45,
            price: 23
        }],
        rating: 3.9,
        description: "string test",
    },
    {
        id: 3,
        name: "Naruto",
        imagesUrl: [
            "shop-details/product-big-2.png",
            "shop-details/product-big-3.png",
        ],
        price: 38.95,
        code: "DF556",
        options: [{
            name: 'P',
            amount: 45,
            price: 23
        }],
        rating: 4.8,
        description: "stringfiy",
    }
];