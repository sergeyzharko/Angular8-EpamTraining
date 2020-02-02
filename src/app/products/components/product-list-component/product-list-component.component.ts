import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products; // ? почему без типа?

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.products = this.productsService.getProducts();
  }

}
