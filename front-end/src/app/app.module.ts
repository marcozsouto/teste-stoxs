import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
import { Error404Component } from './core/component/error-404/error-404.component';
import { CartModule } from './cart/cart.module';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'products', pathMatch: 'full'
      }, {
        path: '**', component: Error404Component
      }
    ]),
    ProductModule,
    CoreModule,
    CartModule
  ],
  providers: [
    StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
