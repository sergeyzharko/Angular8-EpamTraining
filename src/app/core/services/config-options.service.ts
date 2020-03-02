import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Config } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  constructor(private localStorageService: LocalStorageService) { }

  private config: Config = JSON.parse(this.localStorageService.getItem('config')) || [];

  get(): Config {
    return this.config;
  }

  set(id: number, login: string, email: string): Config {
    this.config.id = id;
    this.config.login = login;
    this.config.email = email;
    this.localStorageService.setItem('config', this.config);
    return this.config;
  }
}
