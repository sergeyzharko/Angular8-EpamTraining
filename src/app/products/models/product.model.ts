import { Category } from '../../shared/enums/enums';

export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export class Product implements ProductInterface {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean) {

    }
}
