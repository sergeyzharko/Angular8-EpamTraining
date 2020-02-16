import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    CartComponentComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartComponentComponent
  ]
})
export class CartModule { }
