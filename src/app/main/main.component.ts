import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private loginService: LoginService){}

  title = 'sci-formal';

  isLoggedIn(){    
    return this.loginService.checkLoggedIn();
  }

  ngOnInit() {
  }

}
