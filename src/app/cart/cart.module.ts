import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponentComponent } from './components/cart-component/cart-component.component';

@NgModule({
  declarations: [
    CartComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponentComponent
  ]
})
export class CartModule { }
