import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../../enums';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    new Product(1, 'Car', 'Lada', 5, Category.Car, true),
    new Product(2, 'House', 'Odnushka', 10, Category.House, true)
  ];

  getProducts(): Array<Product> {
    return this.products;
  }
}
