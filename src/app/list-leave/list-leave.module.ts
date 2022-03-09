import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListLeaveRoutingModule } from './list-leave-routing.module';
import { ListLeaveComponent } from './list-leave.component';


@NgModule({
  declarations: [ListLeaveComponent],
  imports: [
    CommonModule,
    ListLeaveRoutingModule
  ]
})
export class ListLeaveModule { }
