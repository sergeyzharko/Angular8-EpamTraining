import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Array<Product> = [];

  getCart(): Array<Product> {
    return this.cart;
  }

  getSum(): number {
    return this.cart.reduce( (accumulator, currentValue) => accumulator + currentValue.price, 0 );
  }

  add(product: Product) {
    this.cart.push(product);
  }

  clearCart(): void {
    this.cart = [];
  }
}
