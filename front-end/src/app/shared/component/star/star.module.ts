import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from './star.component';

@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent
    ],
    imports: [
        BrowserModule
    ]
})

export class StarModule {

}