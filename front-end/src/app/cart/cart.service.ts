import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct } from './CartProduct';
import { CartComponent } from './cart.component';


@Injectable({
    providedIn: 'root'
})

export class CartService { 

    private courseURL: string = 'http://localhost:8080'

    products: CartProduct[] = []; 

    constructor(private HttpClient: HttpClient){}

    retrieveAll(): CartProduct[] {
        return this.products;
    }


    retrieveById(id: number): CartProduct {
        return this.products.find((productIterable: CartProduct) => productIterable.id === id);
    }

    save(product: CartProduct): void {
        console.log(product);
        this.products.push(product);
    }

    private dataObs: CartComponent;

    getData() {
        return this.dataObs.returnVal();
    }
}