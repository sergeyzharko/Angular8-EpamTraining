import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponentComponent } from './products/components/product-list-component/product-list-component.component';
import { ProductFormComponent } from './products/components/product-form/product-form.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './orders/components/order/order.component';
import { AuthGuard } from './../core';

const routes: Routes = [
  {
    path: 'products',
    data: { title: 'Products' },
    component: ProductListComponentComponent
  },
  {
    path: 'orders',
    data: { title: 'Orders' },
    component: OrderComponent
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/products/:productID',
    component: ProductFormComponent
  },
  {
    path: 'edit/product/add',
    component: ProductFormComponent
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
