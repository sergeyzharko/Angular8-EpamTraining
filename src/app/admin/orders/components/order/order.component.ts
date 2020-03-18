import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../orders/services/order.service';
import { Order } from '../../../../orders/models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Array<Order>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  private getOrders(): void {
    this.orders = this.orderService.getOrders();
  }

}
