import { Category } from '../../../shared/enums/enums';

export class Product {
    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public category: Category = Category.Car,
        public isAvailable: boolean = true) {

    }
}
