import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Component } from '@angular/core';

import { ProductComponentComponent } from './product-component.component';
import { Product } from '../../models/product.model';
import { Category } from '../../../shared/enums/enums';

@Component({
  template: `
    <app-product-component
      [product]="product"
      (buyProduct)="onBuyProduct($event)">
    </app-product-component>
  `
})
class TestHostComponent {
  task = 'Test task name';
  selectedProduct: Product;
  onBuyProduct(product: Product) {
    this.selectedProduct = product;
  }
}

describe('ProductComponent', () => {
  let component: ProductComponentComponent;
  let testHostParent: TestHostComponent;
  let fixture: ComponentFixture<ProductComponentComponent>;
  let fixtureParent: ComponentFixture<TestHostComponent>;
  let userEl: DebugElement;
  let descEl: DebugElement;
  let hostEl: DebugElement;
  const expectedProduct = new Product(1, 'Name', 'Description', 100, Category.House, true);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponentComponent, TestHostComponent]
    });

    fixture = TestBed.createComponent(ProductComponentComponent);
    component = fixture.componentInstance;

    descEl = fixture.debugElement.query(By.css('li:first-of-type'));
  });

  it('should display product name', () => {
    fixtureParent = TestBed.createComponent(TestHostComponent);
    testHostParent = fixtureParent.componentInstance;

    // Ищем элемент с классом .task
    hostEl = fixtureParent.debugElement.query(By.css('li:first-of-type'));
    expect(hostEl.nativeElement.textContent).toContain(expectedProduct.description);
  });

  it('should display product description', () => {
    component.product = expectedProduct;
    fixture.detectChanges();
    expect(descEl.nativeElement.textContent).toContain(expectedProduct.description);
  });

  it('should raise selected product when clicked', () => {
    let selectedProduct: Product;
    component.product = expectedProduct;

    // Запускаем обнаружение изменений для первоначальной привязки данных
    fixture.detectChanges(); // для активации ngIf
    userEl = fixture.debugElement.query(By.css('.buy'));

    component.buyProduct.subscribe((user: Product) => (selectedProduct = user));
    userEl.triggerEventHandler('click', null);
    expect(selectedProduct).toBe(expectedProduct);
  });
});
