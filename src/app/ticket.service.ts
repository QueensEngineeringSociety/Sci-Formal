import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  getDrinkCost() {
    return 5;
  }

  getDepositCost() {
    return this.httpClient.get<any>("http://localhost:8000/api/depositCost");
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

  buyDeposit(token) {
    return this.httpClient.post<any>("http://localhost:8000/api/buyDeposit", {"token":token.id, "email":token.email})
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
