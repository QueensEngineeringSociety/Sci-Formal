import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  depositCost = null;
  purchaceResponce = null;
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

  getTicketInfo(){
    return this.ticketService.getTicketInfo();
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
    this.purchaceResponce = event;
  }

}
