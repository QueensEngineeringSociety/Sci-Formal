import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

  getTicketInfo(){
    return this.ticketService.getTicketInfo();
  }

  getDepositCost(){
    return this.ticketService.getDepositCost();
  }

  buyDeposit(){
    return this.ticketService.buyDeposit();
  }

}
