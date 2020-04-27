import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { OrderComponent } from './components/order/order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { NewOrderComponent } from './components/new-order/new-order.component';

@NgModule({
  declarations: [OrderComponent, NewOrderComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
