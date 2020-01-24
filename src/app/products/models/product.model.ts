import { Category } from '../../enums';

export class Product {
    constructor(id, name, description, price, category, isAvailable) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.isAvailable = isAvailable;
    }
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}
