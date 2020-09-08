import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { StateListComponent } from './state-list/state-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [StateDetailComponent, StateListComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    SharedModule
  ]
})
export class StateModule { }
