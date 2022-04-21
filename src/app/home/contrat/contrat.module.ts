import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratComponent } from './contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { EditContratComponent } from './edit-contrat/edit-contrat.component';
import { DeleteContratComponent } from './delete-contrat/delete-contrat.component';
import { SearchContratComponent } from './search-contrat/search-contrat.component';




@NgModule({
  declarations: [ContratComponent, ListContratComponent, AddContratComponent, EditContratComponent, DeleteContratComponent, SearchContratComponent],
  imports: [
    CommonModule,
    ContratRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ContratModule { }
