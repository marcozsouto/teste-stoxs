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

    @ViewChild('template') template;

    constructor(private productService: ProductService, private modalService: BsModalService){

    }

    openModal() {
        this.modalRef = this.modalService.show(this.template, {class: 'modal-sm'});
    }
    
    ngOnInit(): void { 
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

}