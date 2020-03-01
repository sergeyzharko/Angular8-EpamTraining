import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  getConstant() {
    return {
      App: 'Shop',
      Ver: '1.0',
    };
  }
}

export const versionInstance = new ConstantService();
