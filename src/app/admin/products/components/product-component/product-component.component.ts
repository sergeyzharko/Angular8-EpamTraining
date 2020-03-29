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
  @Output() deleteProduct = new EventEmitter<Product>();

  public onEditProduct(): void {
    this.buyProduct.emit(this.product);
  }

  public onDeleteProduct() {
    console.log('delete');
    this.deleteProduct.emit(this.product);
  }

  public setClasses() {
    const classes = {
      available: this.product.isAvailable,
      notAvailable: !this.product.isAvailable
    };
    return classes;
  }

}
