import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-hour-logger',
  templateUrl: './hour-logger.component.html',
  styleUrls: ['./hour-logger.component.css']
})
export class HourLoggerComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  swipeIn(netId: string){
    return this.adminService.swipeIn(netId);
  }

  swipeOut(netId: string){
    return this.adminService.swipeOut(netId);
  }

  getSwipedIn(){
    
    return this.adminService.getSwipedIn();
  }

  bulkSwipeOut(){
    return this.adminService.bulkSwipeOut();
  }
}
