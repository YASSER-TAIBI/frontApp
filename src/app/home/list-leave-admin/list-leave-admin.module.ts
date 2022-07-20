import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListLeaveAdminRoutingModule } from './list-leave-admin-routing.module';
import { ListLeaveAdminComponent } from './list-leave-admin.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ListLeaveAdminComponent],
  imports: [
    CommonModule,
    ListLeaveAdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ]
})
export class ListLeaveAdminModule { }
