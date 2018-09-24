import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as moment from "moment";
import { tap, shareReplay, catchError } from "rxjs/operators";
import { location } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // constructor() { }

  // login() {
  //   globals.isLoggedIn = true;
  // }

  // logout() {
  //   globals.isLoggedIn = false;
  // }
  constructor(private httpClient: HttpClient) {

  }

  login(netId:string, password:string ) {
    console.log(netId);
    return this.httpClient.post<any>(""+location+"/api/login", {"netid":netId,"password": password})
        .pipe(
          tap(response => {
              this.setSession(response)
            }),
            shareReplay()
        );
  }

  signUp(netId: string, passwrd: string, fname: string,lname: string){
    return this.httpClient.post<any>(""+location+"/api/newUser", 
            {"netid":netId,"password": passwrd, "fname": fname, "lname": lname})
  }
        
  private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');
      
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public checkLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.checkLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }  
}

export function checkIsLoggedIn(){
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment().isBefore(expiresAt);
}