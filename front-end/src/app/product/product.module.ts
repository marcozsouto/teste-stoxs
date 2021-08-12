import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TodoListService } from "../services/todo-list.service";
import { StarModule } from "../shared/component/star/star.module";
import { ProductInfoComponent } from "./product-info.component";
import { ProductListComponent } from "./product-list.component";

@NgModule({
    declarations:[
        ProductInfoComponent,
        ProductListComponent,
    ],
    imports:[
        StarModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'products', component: ProductListComponent
            },
            {
                path: 'products/info/:id', component: ProductInfoComponent
            }
        ])
    ],
    providers:[
        TodoListService
    ]
})

export class ProductModule{

}