import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { DrinksComponent } from './drinks/drinks.component';
import { TicketsComponent } from './tickets/tickets.component'
import { HoursComponent } from './hours/hours.component'
import { HourLoggerComponent } from './hour-logger/hour-logger.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes : Routes = [
  { path: 'deposit', component: DepositComponent},
  // { path: 'drinks', component: DrinksComponent},
  // { path: 'tickets', component: TicketsComponent},
  // { path: 'hours', component: HoursComponent},
  // { path: 'hour-logger', component: HourLoggerComponent},
  { path: '', component: LoginComponent, outlet: 'login'},
  { path: 'sign-up', component: SignUpComponent, outlet: 'login'},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
