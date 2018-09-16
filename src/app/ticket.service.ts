import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getDrinkCost() {
    return 5;
  }

  getDepositCost() {
    return 50;
  }

  getTicketCost() {
    return 130;
  }

  buyDrinks(amount: number) {
    return true;
  }

  buyTicket() {
    return true;
  }

  buyDeposit() {
    return true;
  }

  getDrinkAmount() {
    return 2;
  }

  getTicketInfo() {
    return {
      'deposit':false,
      'ticket':false
    }
  }
}
