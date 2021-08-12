import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit { 

    filteredProducts: Product[] = [];

    _products: Product[] = [];

    _filterBy: string;

    constructor(private productService: ProductService){

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
}