import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { Field } from '../../models/field.model';
import { OrderService } from '../../../orders/services/order.service';
import { Observable, throwError } from 'rxjs';

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

  cart: CartItem[];
  yourAddress = '';

  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit() {
    this.selectedField.id = 'name';
    this.selectedDirection = 'true';
    this.getCart();
  }

  private getCart(): void {
    this.cartService.cartProducts()
    .subscribe(data => {
        this.cart = data as CartItem[];
    });
    console.log(this.cart);
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

  onOrder(): void {
    this.orderService.addOrder({ price: this.cartService.totalSum(), count: this.cartService.totalQuantity(), created: new Date()});
  }

  public onRemoveItem(item: CartItem) {
    this.cartService.removeProduct(item).subscribe(data => {
      item = data as CartItem;
      this.getCart();
    });
  }

  public onPlus(item: CartItem) {
    item.count++;
    this.cartService.updateProduct(item).subscribe(data => {
      item = data as CartItem;
    });
  }

  public onMinus(item: CartItem) {
    item.count--;
    this.cartService.updateProduct(item).subscribe(data => {
      item = data as CartItem;
    });
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
