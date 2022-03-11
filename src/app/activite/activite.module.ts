import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiviteRoutingModule } from './activite-routing.module';
import { ActiviteComponent } from './activite.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [ActiviteComponent],
  imports: [
    CommonModule,
    ActiviteRoutingModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  bootstrap: [ActiviteComponent]
})
export class ActiviteModule { }
