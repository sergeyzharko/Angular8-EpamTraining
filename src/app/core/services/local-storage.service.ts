import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(name: string, value: any): void {
    const str: string = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(name, str);
  }

  getItem(name: string): string {
    return localStorage.getItem(name);
  }

  removeItem(name: string): void {
    localStorage.removeItem(name);
  }

}
