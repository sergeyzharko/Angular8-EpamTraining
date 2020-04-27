export interface OrderInterface {
  price: number;
  count: number;
  created: Date;
}

export class Order implements OrderInterface {
    constructor(
        public created: Date,
        public user = '',
        public surname = '',
        public email = '',
        public phone: Array<BigInteger> = [],
        public delivery = false,
        public address = '',
        public price = 0,
        public count = 0) {
    }
}
