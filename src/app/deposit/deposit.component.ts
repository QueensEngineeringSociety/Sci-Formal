import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  depositCost = null;
  purchaceSuccess = null;
  purchaceFail = null;
  deposit = null;
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

  getDepositInfo(){
    if (this.deposit==null){
      this.ticketService.getDepositInfo().subscribe(
        response => {
            this.deposit = response.deposit;
            },
        err => console.log(err)
      );
    }
    return this.deposit
  }

  getDepositCost(){
    if (this.depositCost==null)
       this.ticketService.getDepositCost().subscribe(
        response => {
            this.depositCost = response.price;
            },
        err => console.log(err)
      );
    return this.depositCost
  }

  onPurchase(event){
    console.log(event);
    console.log(event.status);
    if(event.status !== undefined){
      let message: string  = event.error.message
      this.purchaceFail = message
      this.purchaceSuccess = ''
    }
    else{
      this.purchaceSuccess = event.message;
      this.purchaceFail = ''
    }
  }
}
