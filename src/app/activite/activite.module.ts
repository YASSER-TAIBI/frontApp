import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiviteRoutingModule } from './activite-routing.module';
import { ActiviteComponent } from './activite.component';


@NgModule({
  declarations: [ActiviteComponent],
  imports: [
    CommonModule,
    ActiviteRoutingModule
  ]
})
export class ActiviteModule { }
