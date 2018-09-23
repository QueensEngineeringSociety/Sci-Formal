import { Component, OnInit, Renderer, Input, Output, EventEmitter } from '@angular/core';
import {TicketService } from '../ticket.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  globalListener: any;

  @Input() type: string;
  @Input() amount : number;
  @Input() cost : number;
  @Output() purchase = new EventEmitter<boolean>();

  constructor(private renderer : Renderer, private ticketService: TicketService) { }

  ngOnInit() {
  }

  openCheckout() {
    var this_ = this
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        this_.ticketService.buyDeposit(token).subscribe( 
          response => { 
            console.log(response); 
            this_.purchase.emit(response);
          },
          err => {
            console.log(err)
            this_.purchase.emit(err);
          }
        );
      }
    });
    
    handler.open({
      name: 'Science Formal',
      description: 'Deposit Payment',
      amount: this.amount * this.cost * 100
    });
    
    this.globalListener = this.renderer.listenGlobal('window', 'popstate', () => {
      handler.close();
    });
  }

  ngOnDestroy() {
    if(this.globalListener)
      this.globalListener();
  }
}
