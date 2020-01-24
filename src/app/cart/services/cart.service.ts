import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];

  getCart(): Array<Product> {
    return this.cart;
  }

  add(product: Product) {
    this.cart.push(product);
  }

  clearCart() {
    this.cart = [];
  }
}
