export interface OrderInterface {
  price: number;
  count: number;
  created: Date;
}

export class Order implements OrderInterface {
    constructor(
        public price: number,
        public count: number,
        public created: Date) {
    }
}
