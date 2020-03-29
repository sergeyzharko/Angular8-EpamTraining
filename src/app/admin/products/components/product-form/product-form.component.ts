import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

import { Product } from '../../models/product.model';
import { Category } from '../../../../shared/enums/enums';
import { ProductsService } from '../../../../products/services/products.service';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

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
        // switchMap((params: ParamMap) => this.productsService.getProduct(+params.get('productID')))

        switchMap((params: ParamMap) => {
          return params.get('productID')
            ? this.productsService.getProduct(+params.get('productID'))
            // when Promise.resolve(null) => task = null => {...null} => {}
            : Promise.resolve(null);
        }))
      .subscribe(observer);
  }

  onSaveProduct() {
    const product = { ...this.product } as Product;
    console.log(product);

    const method = product.id ? 'updateProduct' : 'createProduct';
    this.productsService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));

  }

  onGoBack(): void {
    // this.router.navigate(['/admin/products']);
    this.location.back();
  }
}
