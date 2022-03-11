import { Component, OnInit } from '@angular/core';
import {
  ScheduleComponent, EventSettingsModel, View, EventRenderedArgs, DayService,
  WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-activite',
    //template: '<ejs-schedule #scheduleObj width="100%" [selectedDate]="setDate" [currentView]="setView"></ejs-schedule>',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css'],
  providers: [DayService, WeekService, WorkWeekService,
     MonthService, ResizeService, DragAndDropService]
})
export class ActiviteComponent implements OnInit {

  titre= 'activite-app';
  public setView: View ="Day";
  public setDate: Date = new Date(Date.now());
  
  constructor() { }

  ngOnInit(): void {
  }

}
