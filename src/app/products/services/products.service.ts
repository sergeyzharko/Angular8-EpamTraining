import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../../shared/enums/enums';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private localStorageService: LocalStorageService) { }

  // private products: Array<Product> = JSON.parse(this.localStorageService.getItem('products')) || [];

  // чтобы что-то увидеь пришлось воспользоватся этим кодом
  private products = [
    new Product(1, 'Car', 'Lada', 5, Category.Car, true),
    new Product(2, 'Apartment', 'Odnushka', 10, Category.House, true),
    new Product(2, 'Dacha', 'Domik', 8, Category.House, false)
  ];

  getProducts: Promise<Product[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.products);
    }, 2000);
  }).catch(error => error) as Promise<Product[]>;

  getProduct(id: number | string): Promise<Product> {
    return this.getProducts
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProducts method'));
  }

  cartProducts(): Array<Product> {
    return this.products;
  }

  createProduct(product: Product) {
    let item = this.products.find(x => x.id === product.id);
    if (item) {
      console.log('Already Exists');
    } else {
      item = new Product(product.id, product.name, product.description, product.price, product.category, true);
      this.products.push(item);
    }
    this.localStorageService.setItem('products', this.products);
  }

  updateProduct(product: Product) {
    this.products[this.products.find(x => x.id === product.id).id] = product;
  }

  removeProduct(id: number) {
    this.products.find(x => x.id === id).isAvailable = false;
    this.localStorageService.setItem('products', this.products);
  }

  removeAllProducts(): void {
    this.products = [];
    this.localStorageService.removeItem('products');
  }

}
