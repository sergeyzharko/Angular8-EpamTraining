import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  getItem(name: string): string {
    return localStorage.getItem(name);
  }

  removeItem(name: string): void {
    localStorage.removeItem(name);
  }

}
