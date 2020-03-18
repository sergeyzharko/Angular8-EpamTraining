import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { Router } from '@angular/router';

import { ProductComponentComponent, ProductListComponentComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductListComponentComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponentComponent
  ],
})
export class ProductsModule { }
