import { Input, Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  public onBuy(product: Product) {
    this.cartService.add(product);
    console.log(`${product.name} has been purchased`);
  }

}
