import { Injectable } from '@angular/core';
import { Shift } from './hour.service';

export class User {
  fname: string;
  lname: string;
  netId: string;
  shifts: Shift[] = [];
}

export class LoggedIn  {
  user: User;
  signInTime: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  swipeIn(netId: string){
    return true;
  }

  swipeOut(netId: string){
    return true;
  }

  getSwipedIn(){
    let users: LoggedIn[] = []

    users.push({
      user: {
        fname: 'Mr',
        lname: 'Test',
        netId: '00aa00',
        shifts: [
          {description: 'Test1', type: 'Final', hours: 5},
          {description: 'Test2', type: 'Regular', hours: 5}
        ]},
        signInTime: new Date()
      }
    )

    users.push({
      user: {
        fname: 'Mr',
        lname: 'Test2',
        netId: '11bb11',
        shifts: [
          {description: 'Test1', type: 'Final', hours: 5},
          {description: 'Test2', type: 'Regular', hours: 5}
        ]},
        signInTime: new Date()
      }
    )

    users.push({
      user: {
        fname: 'Mr',
        lname: 'Test3',
        netId: '22cc22',
        shifts: [
          {description: 'Test1', type: 'Final', hours: 5},
          {description: 'Test2', type: 'Regular', hours: 5}
        ]},
        signInTime: new Date()
      }
    )

    return users
  }

  bulkSwipeOut(){
    return true;
  }


}
