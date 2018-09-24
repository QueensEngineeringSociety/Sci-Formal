import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { location } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  getDrinkCost() {
    return 5;
  }

  getDepositCost() {
    return this.httpClient.get<any>(""+location+"/api/depositCost");
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
    return this.httpClient.post<any>(""+location+"/api/buyDeposit", {"token":token.id, "email":token.email})
  }

  getDepositInfo() {
    return this.httpClient.get<any>(""+location+"/api/depostInfo")
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
