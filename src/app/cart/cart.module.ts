import { NgModule } from '@angular/core';

import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from './../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartComponentComponent,
    CartItemComponent
  ],
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  exports: [
    CartComponentComponent
  ]
})
export class CartModule { }
