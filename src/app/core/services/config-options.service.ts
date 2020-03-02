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

  // желательно типы указать
  set(id, login, email): Config {
    this.config.id = id;
    this.config.login = login;
    this.config.email = email;
    this.localStorageService.setItem('config', JSON.stringify(this.config));
    return this.config;
  }
}
