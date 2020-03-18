import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { Category } from '../../../../shared/enums/enums';
import { ProductsService } from '../../../../products/services/products.service';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.productsService.getProducts.then(
    //     data => this.product = data.find(
    //       elem => {
    //         return Number(params.id) === Number(elem.id);
    //       }
    //     ) || {id: data.length,
    //       name: '',
    //       description: '',
    //       price: 0,
    //       category: Category.House,
    //       isAvailable: true}
    //   );
    // });


    this.product = new Product();

    const observer = {
      next: (product: Product) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productsService.getProduct(+params.get('id'))))
      .subscribe(observer);

  }

  onSaveProduct() {
    const product = { ...this.product } as Product;
    console.log(product);
    if (product.id >= 0) {
      this.productsService.updateProduct(product);
    } else {
      this.productsService.createProduct(product);
    }
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }
}
