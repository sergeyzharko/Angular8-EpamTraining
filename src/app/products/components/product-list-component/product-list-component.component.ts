import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../models/product.model';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit, OnDestroy {

  products: Array<Product>;
  // products: Promise<Product[]>;

  constructor(
    public productsService: ProductsService,
    private cartService: CartService,
    private location: Location
  ) { }

  private sub: Subscription;

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.productsService.getProducts().then(data => this.products = data);
  }

  public onBuyProduct(product: Product) {
    const observer = {
      next: (savedProduct: Product) => {},
      error: (err: any) => console.log(err)
    };
    this.sub = this.cartService.addProduct(product).subscribe(observer);
  }

  ngOnDestroy(): void {
    if (this.sub) {
       this.sub.unsubscribe();
    }
  }

}
