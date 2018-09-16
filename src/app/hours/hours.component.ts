import { Component, OnInit } from '@angular/core';
import { HourService } from '../hour.service';


@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {

  constructor(private hourService: HourService) { }

  ngOnInit() {
  }

  getTotalHours(){
    return this.hourService.getTotalHours();
  }

  getDetailedHours(){
    return this.hourService.getDetailedHours();
  }

}
