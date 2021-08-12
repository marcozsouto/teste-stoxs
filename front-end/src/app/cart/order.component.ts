import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Product } from "../product/product";
import { TodoListService } from "../services/todo-list.service";

@Component({
    templateUrl: './order.component.html'
})

export class OrderComponent {

    cartProducts: Product[] = [];
    cartTotal: number = 0;
    form: FormGroup;

    constructor(
        private cartService: TodoListService,
        private FormBuider: FormBuilder
        
    ){}

    ngOnInit(): void { 
        this.form = this.FormBuider.group({
            firstName:      [null, [Validators.required]],
            lastName:       [null, [Validators.required]],
            country:        [null, [Validators.required]],
            street:         [null, [Validators.required]],
            infoStreet:     [null, [Validators.required]],
            city:           [null, [Validators.required]],
            state:          [null, [Validators.required]],
            postcode:       [null, [Validators.required]],
            phone:          [null, [Validators.required]],
            email:          [null, [Validators.required]],
            checkAccount:   [null, [Validators.required]],
            password:       [null, [Validators.required]],
            checkNote:      [null, [Validators.required]],
            notes:          [null, [Validators.required]],
            checkPayment:   [null],
            checkPaypal:    [null],
        });
        this.getProducts();
    }

    getProducts() {
        this.cartProducts = this.cartService.getItems();
        this.cartProducts.forEach(Element => {
            let number = this.cartTotal + Element.options[0].price;
            this.cartTotal = this.round(number, 2);
        });
    }

    round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    checkOut(){
        console.log(this.form.value);
        console.log(this.form.valid);
        this.form.reset();
    }


}