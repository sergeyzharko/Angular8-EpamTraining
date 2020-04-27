import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

import { checkEmail } from './custom.validators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
  }]
})
export class EmailDirective implements Validator {

  validate(c: AbstractControl): ValidationErrors | null {
    return checkEmail(c, 1, 3);
  }
}
