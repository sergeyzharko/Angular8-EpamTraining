import { Category } from '../../enums';

export class Product {
    constructor(
    //   id, name, description, price, category, isAvailable) {
    //     this.id = id;
    //     this.name = name;
    //     this.description = description;
    //     this.price = price;
    //     this.category = category;
    //     this.isAvailable = isAvailable;
    // }
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public isAvailable: boolean){}
}
