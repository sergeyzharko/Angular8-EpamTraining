import { Action, createReducer, on } from '@ngrx/store';

import { adapter, CartState, initialCartState } from './cart.state';
import * as CartActions from './cart.actions';

const reducer = createReducer(
  initialCartState,
  on(CartActions.cartCart, state => {
    console.log('GET_CART action being handled!');
    return {
      ...state,
      loading: true
    };
  }),
  on(CartActions.getCartSuccess, (state, { cart }) => {
    console.log('GET_CART_SUCCESS action being handled!');
    const data = [...cart];
    return {
      ...state,
      data,
      loading: false,
      loaded: true
    };
    // return adapter.setAll(cart, {...state, loading: false, loaded: true });
  }),
  on(CartActions.getCartError, (state, { error }) => {
    console.log('GET_CART_ERROR action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),
  on(CartActions.cartProduct, state => {
    console.log('GET_CART_PRODUCT action being handled!');
    return {
      ...state,
      loading: true,
      loaded: false };
  }),
  on(CartActions.cartProductSuccess, (state, { product }) => {
    console.log('GET_TASK action being handled!');
    const selectedProduct = { ...product };
    return {
      ...state,
      loading: false,
      loaded: true,
      selectedProduct
    };
  }),
  on(
    CartActions.cartProductError,
    (state, { error }) => {
      console.log('GET_TASKS/TASK_ERROR action being handled!');
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }
  ),
  on(CartActions.addProduct, state => {
    console.log('ADD_CART_PRODUCT action being handled!');
    return { ...state };
  }),
  on(CartActions.updateProduct, state => {
    console.log('UPDATE_CART_PRODUCT action being handled!');
    return { ...state };
  }),
  on(CartActions.updateProductSuccess, (state, { product }) => {
    console.log('UPDATE_TASK_SUCCESS action being handled!');
    return adapter.updateOne({ id: product.id, changes: product }, state);
  }),
  on(CartActions.updateProductError, (state, { error }) => {
    console.log('UPDATE_TASK_ERROR action being handled!');
    return {
      ...state,
      error
    };
  }),
  on(CartActions.removeProduct, state => {
    console.log('REMOVE_CART_PRODUCT action being handled!');
    return { ...state };
  }),
  on(CartActions.removeProductSuccess, (state, { product }) => {
    console.log('REMOVE_CART_PRODUCTS action being handled!');
    return adapter.removeOne(product.id, state);
  }),
  on(CartActions.removeProductError, (state, { error }) => {
    console.log('REMOVE_CART_PRODUCT action being handled!');
    return {
      ...state,
      error
    };
  }),
  on(CartActions.totalSum, state => {
    console.log('TOTAL_SUM action being handled!');
    // return state.data.reduce( (accumulator, currentValue) => accumulator + currentValue.price, 0 );
    return { ...state };
  }),
  on(CartActions.totalQuantity, state => {
    console.log('TOTAL_QUANTITY action being handled!');
    // return state.data.reduce( (accumulator, currentValue) => accumulator + currentValue.count, 0 );
    return { ...state };
  })
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}
