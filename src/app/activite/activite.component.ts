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
  
  
  public statusFields: Object = { text: "StatusText", value: "StatusText" };
  public StatusData: Object[] = [
     { StatusText: "Entreprise" },
     { StatusText: "Télétravail" },
     { StatusText: "Mission" }
  ];

  public eventobject: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      Subject: "Meditation time",
      StartTime: new Date(2019,0,17,11,0),
      EndTime: new Date(2019,8,17,11,38),
      Location: "yaseer"
    }]
  }
  constructor() { }

  ngOnInit(): void {
  }
  public dateParser(data: string) {
    console.log(data)
    return new Date(data);
  }
}
