import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponentComponent } from './components/cart-component/cart-component.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule {}
