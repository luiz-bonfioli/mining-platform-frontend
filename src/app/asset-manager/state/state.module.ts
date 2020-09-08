import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateListComponent } from './state-list/state-list.component';
import { StateDetailComponent } from './state-detail/state-detail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [StateListComponent, StateDetailComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    SharedModule
  ]
})
export class StateModule { }
