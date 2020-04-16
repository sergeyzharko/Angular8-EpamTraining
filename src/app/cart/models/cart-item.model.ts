export interface CartItemInterface {
  id: number;
  name: string;
  count: number;
  price: number;
  updated: Date;
}

export class CartItem implements CartItemInterface {
    constructor(
        public id: number,
        public name: string,
        public count: number,
        public price: number,
        public updated: Date) {
    }
}
