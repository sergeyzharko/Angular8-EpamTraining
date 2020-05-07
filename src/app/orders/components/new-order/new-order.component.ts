import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../../../orders/services/order.service';
import { CartItem } from '../../../cart/models/cart-item.model';
import { Observable } from 'rxjs';
import * as CartActions from '../../../core/@ngrx/cart/cart.actions';
import { Order } from '../../models/order.model';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { checkEmail } from './../../../validators';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, CartState } from '../../../core/@ngrx';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit, OnDestroy {

  cart: CartItem[];
  cartState$: Observable<CartState>;
  order: Order = new Order(new Date());
  validationMessage: string;
  private sub: Subscription;
  private validationMessagesMap = {
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.'
    }
  };

  // form model
  orderForm: FormGroup;

  private setValidationMessage(c: AbstractControl, controlName: string) {
    this.validationMessage = '';

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])[0];
    }
  }

  constructor(
    private orderService: OrderService,
    private store: Store<AppState>,
    private fb: FormBuilder,
  ) { }

  private buildForm() {
    this.orderForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      surname: [ {value: 'Zharko', disabled: false}, [Validators.required, Validators.maxLength(50)] ],
      // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email] ],
      email: ['', [Validators.required, checkEmail]],
      // phones: this.fb.array([new FormControl('')]),
      phones: new FormArray([
        new FormControl(''),
      ]),
      delivery: false,
      address: ''
    });
  }

  get phones(): FormArray {
    return this.orderForm.get('phones') as FormArray;
  }

  onAddPhone() {
    this.phones.push(new FormControl(''));
  }

  onRemovePhone(index: number): void {
    this.phones.removeAt(index); // remove from template
  }

  ngOnInit() {
    this.buildForm();
    this.cartState$ = this.store.pipe(select('cart'));
    this.store.dispatch(CartActions.cartCart());
    this.cartState$.subscribe(data => {
      this.cart = data.data as CartItem[];
    });
    this.watchValueChanges();
  }

  onSave(): void {
    // Form model
    console.log('Form model', this.orderForm);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.orderForm.getRawValue())}`);

    this.orderForm.value.price = 0;
    this.orderForm.value.count = 0;
    this.cart.forEach(element => this.orderForm.value.price = + Number(element.price));
    this.cart.forEach(element => this.orderForm.value.count = + Number(element.count));
    this.orderForm.value.created = new Date();
    this.orderService.addOrder(this.orderForm.value);
  }

  private watchValueChanges() {
    const emailControl = this.orderForm.get('email');
    this.sub = emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(value => {
      this.setValidationMessage(emailControl, 'email');
    }
    );
  }

  onBlur() {
    const emailControl = this.orderForm.get('email');
    this.setValidationMessage(emailControl, 'email');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
