import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from './../../../products/models/product.model';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  cart: Array<Product>;
  sum: number;

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

  onClearCart(): void {
    this.cartService.clearCart();
    this.getCart();
  }

}
