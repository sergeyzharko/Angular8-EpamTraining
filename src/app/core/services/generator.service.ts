import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  getString(n: number): string {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    characters.split('').forEach(
      elem => result += characters.charAt(Math.floor(Math.random() * characters.length))
    );
    return result.slice(0, -n);
  }
}
