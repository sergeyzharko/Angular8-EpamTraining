import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Product } from '../../products/models/product.model';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { CartItem } from '../models/cart-item.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, publish, refCount, share  } from 'rxjs/operators';
import { UsersAPI } from './../cart.config';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor(
    private localStorageService: LocalStorageService,
    private http: HttpClient,
    @Inject(UsersAPI) private usersUrl: string
  ) { }

  private cart: Array<CartItem> = JSON.parse(this.localStorageService.getItem('cart')) || [];

  // cartProducts(): Array<CartItem> {
  //   console.log(JSON.stringify(this.cart, null, 2));
  //   return this.cart;
  // }

  cartProducts(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.usersUrl).pipe(
      retry(3), // три попытки в случае ошибки
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  cartProduct(id: number): Observable<CartItem> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.get<CartItem>(url).pipe(
      retry(3),
      share(), // = publish() + refCount()
      catchError(this.handleError)
    );
  }

  totalSum(): number {
    return this.cart.reduce( (accumulator, currentValue) => accumulator + currentValue.price, 0 );
  }

  totalQuantity(): number {
    return this.cart.reduce( (accumulator, currentValue) => accumulator + currentValue.count, 0 );
  }

  // addProduct(product: Product) {
  //   let item = this.cart.find(x => x.id === product.id);
  //   if (item) {
  //     item.count++;
  //     item.price += product.price;
  //   } else {
  //     item = new CartItem(product.id, product.name, 1, product.price, new Date());
  //     this.cart.push(item);
  //   }
  //   this.localStorageService.setItem('cart', this.cart);
  // }

  addProduct(product: Product): Observable<CartItem> {
    const url = this.usersUrl;
    const item = new CartItem(product.id, product.name, 1, product.price, new Date());
    const body = JSON.stringify(item);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<CartItem>(url, body, options)
      .pipe(
        catchError( this.handleError )
      );
  }

  updateProduct(user: CartItem): Observable<CartItem> {
    const url = `${this.usersUrl}/${user.id}`;
    const body = JSON.stringify(user);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
          .put<CartItem>(url, body, options)
          .pipe( catchError(this.handleError) );
  }

  removeProduct(user: CartItem): Observable<CartItem> {
    const url = `${this.usersUrl}/${user.id}`;
    const body = JSON.stringify(user);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
          .delete<CartItem>(url)
          .pipe( catchError(this.handleError) );
  }

  deleteProduct(user: CartItem) {}

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert(err.error.split('\n')[0]);
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

  increaseQuantity(id: number) {
    this.cart.find(x => x.id === id).count++;
    this.localStorageService.setItem('cart', this.cart);
  }

  decreaseQuantity(id: number) {
    this.cart.find(x => x.id === id).count--;
    this.localStorageService.setItem('cart', this.cart);
  }

  removeAllProducts(): void {
    this.cart = [];
    this.localStorageService.removeItem('cart');
  }
}
