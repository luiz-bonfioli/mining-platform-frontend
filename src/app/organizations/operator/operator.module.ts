import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorRoutingModule } from './operator-routing.module';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorDetailComponent } from './operator-detail/operator-detail.component';


@NgModule({
  declarations: [OperatorListComponent, OperatorDetailComponent],
  imports: [
    CommonModule,
    OperatorRoutingModule
  ]
})
export class OperatorModule { }
