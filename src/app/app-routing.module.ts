import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { DrinksComponent } from './drinks/drinks.component';
import { TicketsComponent } from './tickets/tickets.component'
import { HoursComponent } from './hours/hours.component'

const routes : Routes = [
  { path: 'deposit', component: DepositComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'hours', component: HoursComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
