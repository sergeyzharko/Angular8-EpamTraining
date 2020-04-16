import { CartItem } from './../../../cart/models/cart-item.model';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface CartState extends EntityState<CartItem>  {
  data: ReadonlyArray<CartItem>;
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string;
  selectedProduct: Readonly<CartItem>;
}

export function selectedProduct(product: CartItem): number {
  // In this case this would be optional since primary key is id
  return product.id;
}

export function sortCartByName(product1: CartItem, product2: CartItem): number {
  return product1.name.localeCompare(product2.name);
}

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
  selectId: selectedProduct,
  sortComparer: sortCartByName
});

export const initialCartState: CartState = adapter.getInitialState({
    loading: false,
    loaded: false,
    error: null,
    selectedProduct: null,
    data: [
      new CartItem(1, 'Car', 1, 5, new Date())
    ],
});

