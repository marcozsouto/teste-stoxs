import { Component, Injectable } from "@angular/core";
import { TodoListService } from "../services/todo-list.service";
import { CartProduct } from "./CartProduct";
import { Output, EventEmitter } from '@angular/core';
import { NavBarComponent } from "../core/component/nav-bar/nav-bar.component";

@Component({
    templateUrl: './cart.component.html'
})


export class CartComponent {
    
    cartProducts: CartProduct[] = [];
    cartTotal: number = 0;
    quantity: number[] = [];

    constructor(private cartService: TodoListService){
        
    }

    ngOnInit(): void { 
        this.updateTotal();
    }


    updateTotal(){
        this.cartProducts = this.cartService.getItems();
        this.cartTotal = 0;
        this.quantity = [];
        this.cartProducts.forEach(Element => {
            let number = this.cartTotal + Element.options.price;
            this.cartTotal = this.round(number, 2);
            this.quantity.push(Element.options.amount);
        });
    }

    amount(i: number){

        this.cartProducts[i].options.amount = this.quantity[i];
        let number = this.cartProducts[i].price * this.quantity[i];
        this.cartProducts[i].options.price = this.round(number, 2);

        this.update(i);
    }

    update(i: number){
        this.cartService.updateItem(this.cartProducts[i], this.cartProducts[i]);
        this.updateTotal();
    }

    remove(i: number){
        this.cartService.deleteItem(this.cartProducts[i]);
        this.updateTotal();
    }

    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    returnVal(){
        this.cartProducts = this.cartService.getItems();
        this.cartTotal = 0;
        this.cartProducts.forEach(Element => {
            let number = this.cartTotal + Element.options.price;
            this.cartTotal = this.round(number, 2);
        });

        return this.cartTotal;
    }


}

