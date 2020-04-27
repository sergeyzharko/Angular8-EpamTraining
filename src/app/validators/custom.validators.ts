import { AbstractControl, ValidationErrors } from '@angular/forms';

const validateEmail = email => /\S+@\S+\.\S+/.test(String(email).toLowerCase());

export function checkEmail(
  c: AbstractControl,
  min: number = 1,
  max: number = 5
): ValidationErrors | null {
  if (
    c.value !== undefined && !validateEmail(c.value)
  ) {
    return {
      pattern: true
    };
  }
  return null;
}

export class CustomValidators {
  static email(c: AbstractControl): ValidationErrors | null {
    console.log('Validator: email is called');
    return checkEmail(c);
  }
}
