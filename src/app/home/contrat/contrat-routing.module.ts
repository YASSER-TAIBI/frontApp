import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { ContratComponent } from './contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { EditContratComponent } from './edit-contrat/edit-contrat.component';
import { DeleteContratComponent } from './delete-contrat/delete-contrat.component';
import { SearchContratComponent } from './search-contrat/search-contrat.component';

const routes: Routes = [
  { path: '', component: ListContratComponent },
  { path: 'add', component: AddContratComponent },
  { path: 'edit/:id', component: EditContratComponent },
  { path: 'delete/:id', component: DeleteContratComponent },
  { path: 'search', component: SearchContratComponent }

]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
