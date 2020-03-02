import { Category } from '../../shared/enums/enums';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public isAvailable: boolean) {

    }
}
