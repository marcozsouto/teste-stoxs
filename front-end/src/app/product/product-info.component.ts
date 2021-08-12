import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart/cart.service";
import { CartProduct } from "../cart/CartProduct";
import { NavBarComponent } from "../core/component/nav-bar/nav-bar.component";
import { TodoListService } from "../services/todo-list.service";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-info.component.html'
})

export class ProductInfoComponent implements OnInit {

    product: Product;

    clicked: boolean[] = [];

    amount: number;

    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: TodoListService) { }

    ngOnInit(): void {
        this.amount = 1;
        this.product =  this.productService.retrieveById(+this.activatedRoute.snapshot.params['id']); 
        for(let i = 0; i< this.product.options.length; i++){
            this.clicked.push(false);
        }
    }

    save(): void{
        this.productService.save(this.product);
    }

    //função que faz o select das opções do item
    like(num: number): void{
        this.clicked.forEach(function(part, index) {
            this[index] = false;
        }, this.clicked);

        this.clicked[num] = !this.clicked[num];
    }
    


    //função que adiciona a carrinho o item
    addToCart(): void{
        
        let index = this.clicked.indexOf(true);
        
        let selectedOption =  { ...this.product.options[index] };
        
        let productToCart = { ...this.product };

        productToCart.options = [];

        productToCart.options.push(selectedOption);

        //validação de pedido com quantidade maior do que estoque
        if(this.amount <= selectedOption.amount){
            productToCart.options[0].amount = this.amount;

            let productAux: CartProduct = {
                id: productToCart.id,
                name: productToCart.name,
                imagesUrl: productToCart.imagesUrl[0],
                price: productToCart.price,
                code: productToCart.code,
                options: {
                    name: productToCart.options[0].name,
                    amount: productToCart.options[0].amount,
                    price: productToCart.price * productToCart.options[0].amount
                },
                rating: productToCart.rating,
                description: productToCart.description,
            };


            this.cartService.addItem(productAux);
        }
  
    
        
    }

}