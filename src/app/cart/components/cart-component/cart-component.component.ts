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
    this.cart = this.cartService.getCart();
  }

  getSum(): string {
    return `Sum: ${this.cartService.getSum()}`;
  }

  getCount(): string {
    return `Count: ${this.cartService.getCount()}`;
  }

  onClearCart(): void {
    this.cartService.clearCart();
    this.getCart();
  }

  public onRemoveItem(item: CartItem) {
    this.cartService.remove(item.id);
  }

  public onPlus(item: CartItem) {
    this.cartService.plusItem(item.id);
  }

  public onMinus(item: CartItem) {
    this.cartService.minusItem(item.id);
  }

  public addAddress(value: string) {
    console.log('addAddress event');
    this.yourAddress = value;
  }

}
