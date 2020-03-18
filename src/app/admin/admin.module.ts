import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';

import { ProductsModule } from './products/products.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    ProductsModule,
    OrdersModule
  ],
  exports: [
  ],
})
export class AdminModule { }
