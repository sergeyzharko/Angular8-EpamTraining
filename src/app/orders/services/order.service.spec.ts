import { OrderService } from './order.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Order } from '../models/order.model';

describe('OrderService without the TestBed', () => {
  let service: OrderService;

  beforeEach(() => {
    service = new OrderService(new LocalStorageService());
    service.removeAllOrders();
    service.addOrder(new Order(new Date(), 'User', 'Surname', 'email@mail.com'));
  });

  it('getValue should return real value', () => {
    expect(service.getOrders()[0].user).toBe('User');
  });
});
