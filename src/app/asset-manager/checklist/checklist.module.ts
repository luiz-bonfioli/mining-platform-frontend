import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChecklistDetailComponent } from './checklist-detail/checklist-detail.component';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import { ChecklistRoutingModule } from './checklist-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChecklistListComponent, ChecklistDetailComponent],
  imports: [
    CommonModule,
    ChecklistRoutingModule,
    SharedModule
  ]
})
export class ChecklistModule { }
