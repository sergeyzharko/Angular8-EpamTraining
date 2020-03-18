import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { OrderComponent } from './components/order/order.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
