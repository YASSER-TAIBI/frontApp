import { Component, OnInit } from '@angular/core';
import {ScheduleComponent, EventSettingsModel, View, EventRenderedArgs, DayService,WeekService, WorkWeekService, MonthService,YearService, ResizeService, DragAndDropService} from '@syncfusion/ej2-angular-schedule';
import{DataManager, UrlAdaptor}from '@syncfusion/ej2-data';

@Component({
  selector: 'app-list-activite',
  templateUrl: './list-activite.component.html',
  styleUrls: ['./list-activite.component.css'],
  providers: [DayService, WeekService, WorkWeekService,
    MonthService,YearService, ResizeService, DragAndDropService]
})
export class ListActiviteComponent implements OnInit {


  titre= 'activite-app';
  public setView: View[] =["WorkWeek","Month","Year"];
  public showWeekNumber: boolean = true;
  public isReadOnly: boolean = true;

  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    adaptor: new UrlAdaptor,
    crossDomain: true
  });
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
  public selectedDate: Date;


  ngOnInit() {

    this.selectedDate = new Date();
  }

}
