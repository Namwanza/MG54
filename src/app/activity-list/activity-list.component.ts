import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activity1 = {
    id: 1,
    name: 'Databases Test 4',
    date: '17/02/2022',
    time: '11:30 am', 
    imageUrl: '',
    location: {
      address: 'Independence Avenue',
      city: 'Windhoek',
      country: 'Namibia'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleActivityClick(data: string): void{
    console.log('received: ', data);
  }
}
