import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { ProductComponentComponent } from './components/product-component/product-component.component';
import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';

@NgModule({
  declarations: [
    ProductComponentComponent,
    ProductListComponentComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    // ProductComponentComponent,  // приватный компонент
    ProductListComponentComponent
  ],
})
export class ProductsModule { }
