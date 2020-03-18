import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private localStorageService: LocalStorageService) { }

  private orders: Array<Order> = JSON.parse(this.localStorageService.getItem('orders')) || [];

  getOrders(): Array<Order> {
    return this.orders;
  }

  addOrder(order: Order) {
    this.orders.push(order);
    this.localStorageService.setItem('orders', this.orders);
  }

  removeAllOrders(): void {
    this.orders = [];
    this.localStorageService.removeItem('orders');
  }

}




