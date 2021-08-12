import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { CartComponent } from 'src/app/cart/cart.component';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html'
})



export class NavBarComponent { 
    @Input()
    total: number;


    ngOnInit(num: number): void { 
        this.total = num; 
    }


    setTotal(num: number){
        console.log(this.total )
        this.total = num; 
        this.ngOnInit(num);
    }
}