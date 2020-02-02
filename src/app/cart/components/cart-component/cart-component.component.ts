import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  cart;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCart();
  }

  private getCart(): void {
    this.cart = this.cartService.getCart();
  }

  onClearCart(): void {
    this.cartService.clearCart();
    this.getCart();
  }

}
