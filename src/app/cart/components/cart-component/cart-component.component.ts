import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { Field } from '../../models/field.model';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  selectedField: Field = new Field('name', 'Name');
  selectedDirection: string;
  fields = [
     new Field('name', 'Name' ),
     new Field('count', 'Count' ),
     new Field('price', 'Price' ),
     new Field('updated', 'Updated' )
  ];

  cart: Array<CartItem>;
  yourAddress = '';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.selectedField.id = 'name';
    this.selectedDirection = 'true';
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

  onSelect(fieldId: string) {
    this.selectedField = null;
    this.fields.forEach(field => {
      if (field.id === fieldId) {
        this.selectedField = field;
      }
    });
}

}
