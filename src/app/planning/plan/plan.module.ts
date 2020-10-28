import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanDetailDialogComponent } from './plan-detail-dialog/plan-detail-dialog.component';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanRoutingModule } from './plan-routing.module';

@NgModule({
  declarations: [PlanListComponent, PlanDetailDialogComponent],
  imports: [
    CommonModule,
    PlanRoutingModule,
    SharedModule
  ]
})
export class PlanModule { }
