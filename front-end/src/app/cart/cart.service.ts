import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartComponent } from './cart.component';
import { Product } from '../product/product';


@Injectable({
    providedIn: 'root'
})

export class CartService { 

    private courseURL: string = 'http://localhost:8080'

    products: Product[] = []; 

    constructor(private HttpClient: HttpClient){}

    retrieveAll(): Product[] {
        return this.products;
    }


    retrieveById(id: number): Product {
        return this.products.find((productIterable: Product) => productIterable.id === id);
    }

    save(product: Product): void {
        console.log(product);
        this.products.push(product);
    }

    private dataObs: CartComponent;

    getData() {
        return this.dataObs.returnVal();
    }
}