import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;
  loginError: string = '';

  constructor(private loginService : LoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      passwrd: [null, Validators.required],
    });
  }

  login() {
    var email = this.form.controls['email'];
    var passwrd = this.form.controls['passwrd'];
    
    if ((passwrd.valid && email.valid) && !(passwrd.pristine && email.pristine) ){
      var temp = this.loginService.login(email.value, passwrd.value);
      temp.subscribe(
        response => {},
        err => {
          if(err.status == 401){
            this.loginError = "No User with this netid and password found. Please try again."
          }
          else {
            this.loginError = "Login Error please try again. If this error persists please contact a system administrator."
          }
           console.log(err)}
      );
    }
    else {
      passwrd.updateValueAndValidity();
      email.updateValueAndValidity();
    }
  }

  getEmailErrorMessage() {
    var email = this.form.controls['email'];
    return email.hasError('required') ? 'You must enter a value' :
        email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswrdErrorMessage() {
    var passwrd = this.form.controls['passwrd'];
    return passwrd.hasError('required') ? 'You must enter a value' : '';
  }

}
