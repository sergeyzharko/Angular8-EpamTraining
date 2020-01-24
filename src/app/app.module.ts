import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponentComponent } from './products/components/product-component/product-component.component';
import { ProductListComponentComponent } from './products/components/product-list-component/product-list-component.component';
import { CartComponentComponent } from './cart/components/cart-component/cart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
