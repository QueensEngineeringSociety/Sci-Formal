import { Injectable } from '@angular/core';
import { globals } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  login() {
    globals.isLoggedIn = true;
  }

  logout() {
    globals.isLoggedIn = false;
  }
}
