import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { Field } from '../../models/field.model';
import { OrderService } from '../../../orders/services/order.service';
import { Observable, throwError } from 'rxjs';
import * as CartActions from '../../../core/@ngrx/cart/cart.actions';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, CartState } from '../../../core/@ngrx';

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
  cartState$: Observable<CartState>;

  constructor(
    // private cartService: CartService,
    private orderService: OrderService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.cartState$ = this.store.pipe(select('cart'));
    this.store.dispatch(CartActions.cartCart());
    console.log('this.cartState$', this.cartState$);
    this.selectedField.id = 'name';
    this.selectedDirection = 'true';
    this.getCart();
  }

  private getCart(): void {
    // this.cartService.cartProducts()
    // .subscribe(data => {
    //   this.cart = data as CartItem[];
    // });

    this.cartState$.subscribe(data => {
      this.cart = data.data as CartItem[];
    });

    // this.store.dispatch(CartActions.cartCart());
  }

  getSum(): number {
    let sum = 0;
    console.log('this.cart', this.cart);
    this.cart.forEach(element => sum = + Number(element.price));
    return sum;
    // return `Sum: ${this.cartService.totalSum()}`;
  }

  getCount(): number {
    let count = 0;
    this.cart.forEach(element => count = + Number(element.count));
    return count;
    // return `Count: ${this.cartService.totalQuantity()}`;
  }

  onClearCart(): void {
    // this.cartService.removeAllProducts();
    // this.getCart();
  }

  onOrder(): void {
    this.orderService.addOrder({ price: this.getSum(), count: this.getCount(), created: new Date()});
  }

  public onRemoveItem(cartItem: CartItem) {
    // this.cartService.removeProduct(item).subscribe(data => {
    //   item = data as CartItem;
    //   this.getCart();
    // });
    this.store.dispatch(CartActions.removeProduct({ cartItem }));
    this.store.dispatch(CartActions.cartCart());
  }

  public onPlus(cartItem: CartItem) {
    cartItem = { ...cartItem } as CartItem;
    cartItem.count++;
    // item.count++;
    // this.cartService.updateProduct(item).subscribe(data => {
    //   item = data as CartItem;
    // });
    this.store.dispatch(CartActions.updateProduct({ cartItem }));
  }

  public onMinus(cartItem: CartItem) {
    cartItem = { ...cartItem } as CartItem;
    cartItem.count--;
    // item.count--;
    // this.cartService.updateProduct(item).subscribe(data => {
    //   item = data as CartItem;
    // });
    this.store.dispatch(CartActions.updateProduct({ cartItem }));
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
