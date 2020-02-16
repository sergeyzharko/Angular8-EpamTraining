import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {

  @Input() product: Product;

  @Output() buyProduct: EventEmitter<Product> = new EventEmitter<Product>();

  public onBuyProduct(): void {
    this.buyProduct.emit(this.product);
    console.log(`${this.product.name} has been purchased`);
  }

  public setClasses() {
    const classes = {
      available: this.product.isAvailable,
      notAvailable: !this.product.isAvailable
    };
    return classes;
  }

}
