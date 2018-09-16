import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

  getTicketInfo(){
    return this.ticketService.getTicketInfo();
  }

  getTicketCost(){
    return this.ticketService.getTicketCost();
  }

  buyTicket(){
    return this.ticketService.buyTicket();
  }

}
