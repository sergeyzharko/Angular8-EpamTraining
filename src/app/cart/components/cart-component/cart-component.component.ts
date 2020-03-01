import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  cart: Array<CartItem>;
  yourAddress = '';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  private getCart(): void {
    this.cart = this.cartService.cartProducts();
  }

  getSum(): string {
    return `Sum: ${this.cartService.totalSum()}`;
  }

  getCount(): string {
    return `Count: ${this.cartService.totalQuantity()}`;
  }

  onClearCart(): void {
    this.cartService.removeAllProducts();
    this.getCart();
  }

  public onRemoveItem(item: CartItem) {
    this.cartService.removeProduct(item.id);
  }

  public onPlus(item: CartItem) {
    this.cartService.increaseQuantity(item.id);
  }

  public onMinus(item: CartItem) {
    this.cartService.decreaseQuantity(item.id);
  }

  public addAddress(value: string) {
    console.log('addAddress event');
    this.yourAddress = value;
  }

}
