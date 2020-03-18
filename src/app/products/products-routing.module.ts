import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponentComponent } from './components/product-list-component/product-list-component.component';

const routes: Routes = [
  {
    path: 'products-list',
    component: ProductListComponentComponent
  },
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
