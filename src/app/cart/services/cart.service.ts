import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private localStorageService: LocalStorageService) { }

  private cart: Array<CartItem> = JSON.parse(this.localStorageService.getItem('cart')) || [];

  cartProducts(): Array<CartItem> {
    return this.cart;
  }

  totalSum(): number {
    return this.cart.reduce( (accumulator, currentValue) => accumulator + currentValue.price, 0 );
  }

  totalQuantity(): number {
    return this.cart.reduce( (accumulator, currentValue) => accumulator + currentValue.count, 0 );
  }

  addProduct(product: Product) {
    let item = this.cart.find(x => x.id === product.id);
    if (item) {
      item.count++;
      item.price += product.price;
    } else {
      item = new CartItem(product.id, product.name, 1, product.price, new Date());
      this.cart.push(item);
    }
    // может быть JSON.stringify() перенести в сервис localStorageService и проверять там, что приходит
    // если объект, то вызывать, если строка, то нет.
    // тогда код этого сервиса будет чище
    this.localStorageService.setItem('cart', JSON.stringify(this.cart));
  }

  removeProduct(id: number) {
    this.cart.find(x => x.id === id).count = 0;
    this.localStorageService.setItem('cart', JSON.stringify(this.cart));
  }

  increaseQuantity(id: number) {
    this.cart.find(x => x.id === id).count++;
    this.localStorageService.setItem('cart', JSON.stringify(this.cart));
  }

  decreaseQuantity(id: number) {
    this.cart.find(x => x.id === id).count--;
    this.localStorageService.setItem('cart', JSON.stringify(this.cart));
  }

  removeAllProducts(): void {
    this.cart = [];
    this.localStorageService.removeItem('cart');
  }
}
