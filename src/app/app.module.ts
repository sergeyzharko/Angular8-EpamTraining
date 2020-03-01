import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductsModule,
    SharedModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
