import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TodoListService } from "../services/todo-list.service";
import { CartProduct } from "./CartProduct";

@Component({
    templateUrl: './order.component.html'
})

export class OrderComponent {

    cartProducts: CartProduct[] = [];
    cartTotal: number = 0;
    form: FormGroup;

    constructor(private cartService: TodoListService){
        
    }

    ngOnInit(): void { 
        this.form = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(),
            country: new FormControl(),
            street: new FormControl(),
            infoStreet: new FormControl(),
            city: new FormControl(),
            state: new FormControl(),
            postcode: new FormControl(),
            phone: new FormControl(),
            email: new FormControl(),
            checkAccount: new FormControl(),
            password: new FormControl(),
            checkNote: new FormControl(),
            notes: new FormControl()
        });
        this.getProducts();
    }

    getProducts() {
        this.cartProducts = this.cartService.getItems();
        this.cartProducts.forEach(Element => {
            let number = this.cartTotal + Element.options.price;
            this.cartTotal = this.round(number, 2);
        });
    }

    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    checkOut(){
        console.log(this.form)
    }


}