import { Injectable } from '@angular/core';
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartItem } from '../../../cart/models/cart-item.model';
import { Product } from '../../../products/models/product.model';
import * as RouterActions from './../router/router.actions';

// rxjs
import { Observable } from 'rxjs';
import { map, switchMap, catchError, pluck, concatMap } from 'rxjs/operators';

import { CartService } from './../../../cart/services/cart.service';


@Injectable()
export class CartEffects {

  getCart$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.cartCart),
      switchMap(() =>
        // Notice!
        // If you have a connection to the Firebase,
        // the stream will be infinite - you have to unsibscribe
        // This can be performed following this pattern
        // this.taskObservableService
        //      .getTasks()
        //      .pipe(takeUntil(this.actions$.pipe(ofType(TasksActions.TaskListComponentIsDestroyed))
        // If you use HttpClient, the stream is finite,
        // so you have no needs to unsibscribe
        this.cartService
          .cartProducts()
          .pipe(
            map(cart => CartActions.getCartSuccess({ cart }))
            // ,
            // catchError(error => of(CartActions.getCartError({ error })))
          )
          // .then(cart => CartActions.getCartSuccess({ cart }))
          // .catch(error => CartActions.getCartError({ error }))
      )
    )
  );

  // getTask$: Observable<Action> = //createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CartActions.cartProduct),
  //     pluck('productId'),
  //     switchMap(productId =>
  //       this.cartService
  //         .cartProduct(productId)
  //         .pipe(
  //           map(product => CartActions.cartProductSuccess({ product }))
  //           // ,
  //           // catchError(error => of(CartActions.getCartError({ error })))
  //         )
  //     )
  //   )
  // );

  addProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addProduct),
      pluck('product'),
      concatMap((product: Product) =>
        this.cartService
          .addProduct(product)
          .pipe(
            map(item => CartActions.addProductSuccess({ product }))
          )
      )
    )
  );

  updatePRoduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.updateProduct),
      pluck('cartItem'),
      concatMap((cartItem: CartItem) =>
        this.cartService
          .updateProduct(cartItem)
          .pipe(
            // this.router.navigate(['/home']);
            // return CartActions.updateProductSuccess({ product: updatedTask });
            map(product => CartActions.updateProductSuccess({ product }))
          )
      )
    )
  );

  removeProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeProduct),
      pluck('cartItem'),
      concatMap((cartItem: CartItem) =>
        this.cartService
          .removeProduct(cartItem)
          .pipe(
            map(product => CartActions.removeProductSuccess({ product }))
          )
      )
    )
  );

  createUpdateProductSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addProductSuccess, CartActions.updateProductSuccess),
      map(action =>
        RouterActions.go({
          path: ['/cart']
        })
      )
    );
  });

  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) {
    console.log('[TASKS EFFECTS]');
  }

}
