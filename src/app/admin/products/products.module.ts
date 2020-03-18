import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { Router } from '@angular/router';

import { ProductComponentComponent, ProductListComponentComponent, ProductFormComponent } from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductListComponentComponent,
    ProductFormComponent
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
