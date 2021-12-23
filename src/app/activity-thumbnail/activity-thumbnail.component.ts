import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'activity-thumbnail',
  templateUrl: './activity-thumbnail.component.html',
  styleUrls: ['./activity-thumbnail.component.css']
})
export class ActivityThumbnailComponent implements OnInit {
  @Input() activity: any
  @Output() actClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe() {
    this.actClick.emit(this.activity.name);
  }

}
