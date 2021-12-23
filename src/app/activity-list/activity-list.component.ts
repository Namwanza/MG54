import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activity1: Activity[] | undefined;

  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
    this._activityService.getActivity().subscribe(response => this.activity1 = this.activity1);
    // this._activityService.getActivity().subscribe(response => this.activity1 = response);
  }

  handleActivityClick(data: string): void{
    console.log('received: ', data);
  }
}
