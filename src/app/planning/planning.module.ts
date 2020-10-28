import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';

@NgModule({
  declarations: [PlanningComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule
  ]
})
export class PlanningModule { }
