import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as moment from "moment";
import { tap, shareReplay, catchError } from "rxjs/operators";

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
    return this.httpClient.post<any>("http://localhost:8000/api/login", {"email":netId,"password": password})
        .subscribe(
          response => {
              console.log(response);
              this.setSession(response)
            },
          err => console.log(err)
        );
  }

  signUp(netId: string, passwrd: string, fname: string,lname: string){
    return this.httpClient.post<any>("http://localhost:8000/api/newUser", 
            {"email":netId,"password": passwrd, "fname": fname, "lname": lname})
        .subscribe(
        response => {
            console.log(response);
            },
        err => console.log(err)
        );
  }
        
  private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');
      console.log("setSession");
      
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