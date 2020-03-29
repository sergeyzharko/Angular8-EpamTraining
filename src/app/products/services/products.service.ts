import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) { }

  private products: Array<Product> = JSON.parse(this.localStorageService.getItem('products')) || [];
  private productsUrl = 'http://localhost:3000/products';

  // private products = [
  //   new Product(1, 'Car', 'Lada', 5, Category.Car, true),
  //   new Product(2, 'Apartment', 'Odnushka', 10, Category.House, true),
  //   new Product(2, 'Dacha', 'Domik', 8, Category.House, false)
  // ];

  // getProducts: Promise<Product[]> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(this.products);
  //   }, 2000);
  // }).catch(error => error) as Promise<Product[]>;

  getProducts(): Promise<Product[]> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  // getProduct(id: number | string): Promise<Product> {
  //   return this.getProducts()
  //     .then(products => products.find(product => product.id === +id))
  //     .catch(() => Promise.reject('Error in getProducts method'));
  // }

  getProduct(id: number | string): Promise<Product> {
    console.log(id);
    const url = `${this.productsUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }


  cartProducts(): Array<Product> {
    return this.products;
  }

  // createProduct(product: Product) {
  //   let item = this.products.find(x => x.id === product.id);
  //   if (item) {
  //     console.log('Already Exists');
  //   } else {
  //     item = new Product(product.id, product.name, product.description, product.price, product.category, true);
  //     this.products.push(item);
  //   }
  //   this.localStorageService.setItem('products', this.products);
  // }

  createProduct(product: Product): Promise<Product> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }


  // updateProduct(product: Product) {
  //   this.products[this.products.find(x => x.id === product.id).id] = product;
  // }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }


  removeProduct(id: number) {
    this.products.find(x => x.id === id).isAvailable = false;
    this.localStorageService.setItem('products', this.products);
  }

  deleteProduct(product: Product): Promise<Product> {
    const url = `${this.productsUrl}/${product.id}`;

    return (
      this.http
        .delete(url)
        .toPromise()
        // json-server return empty object
        // so we don't use .then(...)
        .catch(this.handleError)
    );
  }

  removeAllProducts(): void {
    this.products = [];
    this.localStorageService.removeItem('products');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
