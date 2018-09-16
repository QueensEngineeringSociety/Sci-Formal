import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
  }

  getDrinkCost(){
    return this.ticketService.getDrinkCost();
  }

  getDrinkAmount(){
    return this.ticketService.getDrinkAmount();
  }
}
