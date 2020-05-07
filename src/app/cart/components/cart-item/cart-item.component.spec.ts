import { CartItem } from '../../models/cart-item.model';
import { CartItemComponent } from './cart-item.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [component]
    });

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
  });

  // // Тест подтверждает, что stub работает.
  // it('should welcome the user', () => {
  //   fixture.detectChanges();
  //   const content = el.textContent;

  //   // Тут используем второй опциональный параметр, чтобы показать сообщение,
  //   // когда тест не будет пройден
  //   expect(content).toContain('Welcome', '"Welcome ..."');
  //   expect(content).toContain('Test User', 'expected name');
  // });

  // it('stub object and injected WelcomeService should not be the same', () => {
  //   expect(welcomeServiceStub === welcomeService).toBe(false);

  //   // Изменение значения в стабе не меняет его в сервисе
  //   welcomeServiceStub.isLoggedIn = false;
  //   expect(welcomeService.isLoggedIn).toBe(true);
  // });

  // // Тест проверяет влияние изменения имени пользователя.
  // it('should welcome "Vitaliy"', () => {
  //   // Приветствие не будет доступно до вызова detectChanges
  //   welcomeService.user.name = 'Vitaliy';
  //   fixture.detectChanges();

  //   expect(el.textContent).toContain('Welcome Vitaliy');
  // });

  // // Тест проверяет, что компонент отображает правильное
  // // сообщение, когда нет зарегистрированного пользователя.
  // it('should request login if not logged in', () => {
  //   welcomeService.isLoggedIn = false;
  //   fixture.detectChanges();
  //   const content = el.textContent;

  //   expect(content).not.toContain('Welcome', 'not welcomed');
  //   expect(content).toMatch(/log in/i, '"log in"');
  // });
});
