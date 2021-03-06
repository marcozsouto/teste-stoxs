import { Injectable } from '@angular/core';
import { Product } from '../product/product';

import { StorageService } from './storage.service';

const todoListStorageKey = 'Products';

const defaultTodoList = [
  {title: 'start'}
];

@Injectable()
export class TodoListService {
    
    products: Product[] = []; 

    constructor(private storageService: StorageService) {
        this.products = 
        storageService.getData(todoListStorageKey) || defaultTodoList;
    }

    saveList() {
        this.storageService.setData(todoListStorageKey, this.products);
    }

    addItem(item: Product) {
        this.products.push(item);
        this.saveList();
    }

    updateItem(item, changes) {
        const index = this.products.indexOf(item);
        this.products[index] = { ...item, ...changes };
        this.saveList();
    }

    deleteItem(item) {
        const index = this.products.indexOf(item);
        this.products.splice(index, 1);
        this.saveList();
    }

    getItems(){
        return this.products.slice(1);
    }
}