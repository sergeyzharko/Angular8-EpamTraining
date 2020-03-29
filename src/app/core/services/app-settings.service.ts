import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, publish, refCount, share  } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  settings: object;
  settingsUrl = './assets/app-settings.json';

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) {
    this.settings = JSON.parse(this.localStorageService.getItem('setings'));
    if (!this.settings) {
      this.requestSettings().subscribe((settings) => {
        if (settings) {
          this.settings = settings;
        } else {
          this.settings = { app: 'Shop1', author: 'SZ' };
        }
        this.localStorageService.setItem('setings', this.settings);
      });
    }
  }

  private requestSettings(): Observable<object> {
    return this.http.get<object>(this.settingsUrl).pipe(
      retry(3), // три попытки в случае ошибки
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  getSettings() {
    return this.settings;
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      alert(err.error.split('\n')[0]);
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
