import { Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnDestroy {

  @Input() item: CartItem;

  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() plus: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() minus: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  public onRemoveItem(): void {
    this.removeItem.emit(this.item);
    console.log(`${this.item ? this.item.name : undefined} has been removed`);
  }

  public onPlus(): void {
    this.plus.emit(this.item);
  }

  public onMinus(): void {
    this.minus.emit(this.item);
  }

  public setStyles() {
    const styles = {
      color: this.item && this.item.count > 5 ? 'blue' : 'black'
    };
    return styles;
  }

  ngOnDestroy(): void {
    console.log('Item has been destroyed');
  }

}
