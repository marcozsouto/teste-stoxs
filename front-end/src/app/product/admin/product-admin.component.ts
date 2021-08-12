import { Component, ViewChild } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../product.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    templateUrl: "./product-admin.component.html"
})

export class ProductAdminComponent{
    filteredProducts: Product[] = [];

    _products: Product[] = [];

    _filterBy: string;

    modalRef: BsModalRef;

    amount: number;

    amounts: number[] =[];
    create: Product;

    @ViewChild('template') template;

    constructor(private productService: ProductService, 
                private modalService: BsModalService,        
    ){}


    openModal() {
        this.modalRef = this.modalService.show(this.template, {class: 'modal-lg'});
    }
    
    ngOnInit(): void { 
        this.amount = 1;
        this.create = { 
            id: null,
            name: null,
            imagesUrl: [
                null,
                null
            ],
            price: null,
            code: null,
            options: [
                {
                    name: null,
                    amount: null,
                    price: null,
                }
            ],
            rating: null,
            description: null
        }
        this.thisAmount();
        this._products = this.productService.retrieveAll();
        this.filteredProducts = this._products;
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredProducts = this._products.filter((product: Product) => product.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }


    deleteById(id: number){
        console.log(id);
    }

    createProduct(){

    }

    decline(){
      this.modalRef.hide();
    }


    thisAmount(){
        this.amounts = Array.from(Array(this.amount),(x,i)=>i);

        let aux: Options[] = [];
        this.amounts.forEach(element => {
            aux.push({
                name: null,
                amount: null,
                price: null,
            });
            if(this.create.options[element].name == null){
                
            }
        });



        this.create.options = aux;
        console.log(this.create);
    }

}

type Options = {
    name: string;
    amount: number;
    price: number;
}