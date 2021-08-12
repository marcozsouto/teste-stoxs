import { Component, ViewChild } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../product.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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
    form: FormGroup;
    options: FormArray;

    @ViewChild('template') template;

    constructor(private productService: ProductService, 
                private modalService: BsModalService,
                private FormBuider: FormBuilder          
    ){}


    openModal() {
        this.modalRef = this.modalService.show(this.template, {class: 'modal-lg'});
    }
    
    ngOnInit(): void { 
        this.amount = 1;
        this.thisAmount();
        this._products = this.productService.retrieveAll();
        this.filteredProducts = this._products;
        this.form = this.FormBuider.group({
            name:           [null, [Validators.required]],
            files:          [null, [Validators.required]],
            price:          [null, [Validators.required]],
            code:           [null, [Validators.required]],
            rating:         [null, [Validators.required]],
            description:    [null, [Validators.required]],
            options:        this.FormBuider.array([this.createOptions()])

        });

        this.options = this.form.get('options') as FormArray;
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
        console.log(this.amounts);
    }

    createOptions(): FormGroup {
        return this.FormBuider.group({
          name: [null, Validators.compose([Validators.required])],
          amount: [null, Validators.compose([Validators.required])]
        });
    }

 

}