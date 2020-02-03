import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../../enums';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    new Product(1, 'Car', 'Lada', 5, Category.Car, true),
    new Product(2, 'Apartment', 'Odnushka', 10, Category.House, true),
    new Product(2, 'Dacha', 'Domik', 8, Category.House, false)
  ];

  getProducts(): Array<Product> {
    return this.products;
  }
}
