import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core/core.module";
import { ProductModule } from "../product/product.module";
import { CartComponent } from "./cart.component";
import { OrderComponent } from "./order.component";

@NgModule({
    declarations:[
        CartComponent,
        OrderComponent
    ],
    imports:[
        ProductModule,
        CoreModule,
        CommonModule,
        FormsModule,    
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'shopping-cart', component: CartComponent
            },
            {
                path: 'order', component: OrderComponent
            }
        ])
    ]
        
})

export class CartModule{

}