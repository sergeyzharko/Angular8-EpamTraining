import { createAction, props } from '@ngrx/store';

import { CartItem } from './../../../cart/models/cart-item.model';
import { Product } from '../../../products/models/product.model';

export const cartCart = createAction(
  '[Cart Page (App)] GET_CART'
);

export const getCartSuccess = createAction(
  '[Get Cart Effect] GET_CART_SUCCEESS',
  props<{ cart: CartItem[] }>()
);
export const getCartError = createAction(
  '[Get Cart Effect] GET_CART_ERROR',
  props<{ error: Error | string }>()
);

export const cartProduct = createAction(
  '[Cart Page (App)] GET_CART_PRODUCT',
  props<{ id: number }>()
);

export const cartProductSuccess = createAction(
  '[Get Task Effect] GET_TASK_SUCCESS',
  props<{ product: CartItem }>()
);

export const cartProductError = createAction(
  '[Get Task Effect] GET_TASK_ERROR',
  props<{ error: Error | string }>()
);

export const addProduct = createAction(
  '[Products Page] ADD_CART_PRODUCT',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Create Task Effect] ADD_CART_PRODUCT_SUCCESS',
  props<{ product: Product }>()
);

export const addProductError = createAction(
  '[Create Task Effect] ADD_CART_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);

export const updateProduct = createAction(
  '[Cart Page] UPDATE_CART_PRODUCT',
  props<{ cartItem: CartItem }>()
);

export const updateProductSuccess = createAction(
  '[Update Task Effect] UPDATE_CART_PRODUCT_SUCCESS',
  props<{ product: CartItem }>()
);

export const updateProductError = createAction(
  '[Update Task Effect] UPDATE_CART_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);

export const removeProduct = createAction(
  '[Cart Page] REMOVE_CART_PRODUCT',
  props<{ cartItem: CartItem }>()
);

export const removeProductSuccess = createAction(
  '[Update Task Effect] REMOVE_CART_PRODUCT_SUCCESS',
  props<{ product: CartItem }>()
);

export const removeProductError = createAction(
  '[Update Task Effect] REMOVE_CART_PRODUCT_ERROR',
  props<{ error: Error | string }>()
);

export const totalSum = createAction(
  '[Cart Page] TOTAL_SUM'
);

export const totalQuantity = createAction(
  '[Cart Page] TOTAL_QUANTITY'
);
