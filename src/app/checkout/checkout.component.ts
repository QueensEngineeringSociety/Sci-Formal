import { Component, OnInit, Renderer, Input } from '@angular/core';

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

  constructor(private renderer : Renderer) { }

  ngOnInit() {
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
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
