import { Injectable } from '@angular/core';

class shift {
description: string;
type: string;
hours: number
}

@Injectable({
  providedIn: 'root'
})
export class HourService {

  constructor() { }

  getTotalHours() {
    return {
      'regular': 10,
      'final': 5
    }
  }

  getDetailedHours() {
    let hours: shift[] = []
    hours.push({description: 'Test1', type: 'Final', hours: 5})
    hours.push({description: 'Test2', type: 'Regular', hours: 5})
    hours.push({description: 'Test3', type: 'Regular', hours: 5})

    return hours
  }
}

