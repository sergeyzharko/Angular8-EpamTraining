import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../products/services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: Array<Product>;
  // products: Promise<Product[]>;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.productsService.getProducts().then(data => this.products = data);
  }

  onDeleteProduct(task: Product) {
    this.productsService
      .deleteProduct(task)
      .then(() => this.productsService.getProducts().then(data => this.products = data))
      .catch(err => console.log(err));
  }


}
