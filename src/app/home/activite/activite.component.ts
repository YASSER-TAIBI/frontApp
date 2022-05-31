import { Component, OnInit } from '@angular/core';
import {ScheduleComponent, EventSettingsModel, View, EventRenderedArgs, DayService,WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService} from '@syncfusion/ej2-angular-schedule';
import{DataManager, UrlAdaptor}from '@syncfusion/ej2-data';


@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css'],
  providers: [DayService, WeekService, WorkWeekService,
     MonthService, ResizeService, DragAndDropService]
})
export class ActiviteComponent implements OnInit {


// //   activiteResult: any;
// //   activiteList: any[] = [];


   titre= 'activite-app';
   public setView: View ="Day";
// // //  public setDate;
// //   public dateParser(data: string) {
// //     return new Date(data);
// //   }
 
  
// //   public selectedDate;
// //   public data: Object[];
// //   public eventSettings: EventSettingsModel = {
     
// //       dataSource: [],
// //  fields:{

// //       subject: {name: 'EventTitle'},
// //       startTime: {name: 'EventStart'},
// //       endTime: {name: 'EventEnd'}
// //     }
// //   };
 

private dataManager: DataManager = new DataManager({
  url: 'http://localhost:5000/GetData',
  crudUrl: 'http://localhost:5000/BatchData',
  adaptor: new UrlAdaptor,
  crossDomain: true
});
public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
public selectedDate: Date;
  ngOnInit() {
    this.selectedDate = new Date();
  //  console.log(this.eventSettings)
  //   this.getActiviteList();

  
      


    // this.setDate = new Date();

    
   

 

    // this.eventSettings = {  dataSource: [{

    //         EventTitle: 'Explosion of Betelgeuse Star',
    //         EventStart: new Date(2022, 4, 13, 9, 30),
    //         EventEnd: new Date(2022, 4, 13, 11, 0)
    //     }],
    
    
    //     fields:{
    
    //       subject: {name: 'EventTitle'},
    //       startTime: {name: 'EventStart'},
    //       endTime: {name: 'EventEnd'}
    //     } };

  }

  // getActiviteList(){

  //   this.selectedDate = new Date();


  //   this.activiteService.getActivite().subscribe((data: any[]) => {
  //     this.activiteResult = data;
  //     this.activiteList = this.activiteResult.results;

  //     var dataSource : {
  //       EventTitle : string,
  //       EventStart : Date,
  //       EventEnd : Date
  //     }[] = []

  //    for (let activite in this.activiteList) {
  //       let item = this.activiteList[activite];
    
  //       console.log("item.titreActivite :"+item.titreActivite);
  //       console.log("item.debutActivite :"+item.debutActivite);
  //       console.log("item.finActivite :"+item.finActivite);

  //        dataSource.push({EventTitle : item.titreActivite, EventStart: new Date(2022, 4, 15, 9, 30),
  //         EventEnd: new Date(2022, 4, 15, 11, 0)});

  //     }  

  //     this.eventSettings.dataSource = dataSource
  //     console.log(this.eventSettings)

  //   });
  // }

}
