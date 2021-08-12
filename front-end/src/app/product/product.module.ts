import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ModalModule } from "ngx-bootstrap/modal";
import { TodoListService } from "../services/todo-list.service";
import { StarModule } from "../shared/component/star/star.module";
import { ProductAdminComponent } from "./admin/product-admin.component";
import { ProductInfoComponent } from "./user/product-info.component";
import { ProductListComponent } from "./user/product-list.component";

@NgModule({
    declarations:[
        ProductInfoComponent,
        ProductListComponent,
        ProductAdminComponent
    ],
    imports:[
        StarModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        RouterModule.forChild([
            {
                path: 'products', component: ProductListComponent
            },
            {
                path: 'products/info/:id', component: ProductInfoComponent
            },
            {
                path: 'admin/products', component: ProductAdminComponent
            }
        ])
    ],
    providers:[
        TodoListService
    ]
})

export class ProductModule{

}