import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  form: FormGroup;
  hide = true;

  constructor(private loginService : LoginService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      netId: [null, [Validators.required]],
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      passwrd: [null, Validators.required],
      passwrdConfirm: [null, Validators.required],
    });
  }

  login() {
    var netId = this.form.controls['netId'];
    var fname = this.form.controls['fname'];
    var lname = this.form.controls['lname'];
    var passwrd = this.form.controls['passwrd'];
    var passwrdConfirm = this.form.controls['passwrdConfirm'];
    
    if ((passwrd.valid && netId.valid && fname.valid && lname.valid && passwrdConfirm.valid) && 
        !(passwrd.pristine && netId.pristine && fname.pristine && lname.pristine && passwrdConfirm.pristine) &&
        (passwrd.value == passwrdConfirm.value)){
      this.loginService.signUp(netId.value, passwrd.value, fname.value, lname.value);
      console.log("HERE");
    }
    else {
      passwrd.updateValueAndValidity();
      netId.updateValueAndValidity();
      fname.updateValueAndValidity();
      lname.updateValueAndValidity();
      passwrdConfirm.updateValueAndValidity();
    }
  }

  getPasswrdErrorMessage() {
    var passwrd = this.form.controls['passwrd'];
    return passwrd.hasError('required') ? 'You must enter a value' : '';
  }

  routeSignIn(){
    this.router.navigate(['']); 
  }
}
