import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AllocationRoutingModule } from './allocation-routing.module';
import { AllocationComponent } from './allocation.component';



@NgModule({
  declarations: [AllocationComponent],
  imports: [
    CommonModule,
    AllocationRoutingModule,
    SharedModule
  ]
})
export class AllocationModule { }
