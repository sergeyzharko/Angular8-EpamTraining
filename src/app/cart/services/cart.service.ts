import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Array<CartItem> = [];

  getCart(): Array<CartItem> {
    return this.cart;
  }

  getSum(): number {
    return this.cart.reduce( (accumulator, currentValue) => accumulator + currentValue.price, 0 );
  }

  getCount(): number {
    return this.cart.reduce( (accumulator, currentValue) => accumulator + currentValue.count, 0 );
  }

  add(product: Product) {
    let item = this.cart.find(x => x.id === product.id);
    if (item) {
      item.count++;
      item.price += product.price;
    } else {
      item = new CartItem(product.id, product.name, 1, product.price);
      this.cart.push(item);
    }
  }

  remove(id: number) {
    this.cart.find(x => x.id === id).count = 0;
    console.log(this.cart);
  }

  plusItem(id: number) {
    this.cart.find(x => x.id === id).count++;
  }

  minusItem(id: number) {
    this.cart.find(x => x.id === id).count--;
  }

  clearCart(): void {
    this.cart = [];
  }
}
