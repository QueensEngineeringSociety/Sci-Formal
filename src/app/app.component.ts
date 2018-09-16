import { Component, ViewChild } from '@angular/core';

export const globals = {
  isLoggedIn: false,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sci-formal';
  global = globals; 


}

