import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CartService } from './cart.service';
import { UsersAPI } from './../cart.config';

// Вспомогательный объект ответа
const mockResponse = [
  {
    id: 2,
    name: 'Apartment',
    count: 18,
    price: 30,
    updated: new Date()
  },
  {
    id: 1,
    name: 'Car',
    count: 2,
    price: 5,
    updated: new Date()
  }
];

describe('CartService', () => {
  let mockHttp: HttpTestingController;
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CartService,
        { provide: UsersAPI }
      ]
    });

    // TODO: use TestBed.inject() v.9
    mockHttp = TestBed.get(HttpTestingController);
    cartService = TestBed.get(CartService);
  });

  afterEach(() => {
    /**
     * В конце вызываем метод verify() HttpTestingController
     * чтобы убедиться, что никакие запросы больше не исходят
     */
    mockHttp.verify();
  });

  it('cartProducts should return all products', () => {
    cartService.cartProducts().subscribe(value => {
      expect(value).toEqual(mockResponse);
    });

    const req = mockHttp.expectOne('http://localhost:3000/cart');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('getObservableValue should return one product', () => {
    cartService.cartProduct(1).subscribe(value => {
      expect(value).toEqual(mockResponse[0]);
    });

    const req = mockHttp.expectOne('http://localhost:3000/cart/1');
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse[0]);
  });

});
