import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    SharedModule
  ]
})
export class OrdersModule { }
