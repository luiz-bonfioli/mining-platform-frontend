import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitRoutingModule } from './unit-routing.module';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';


@NgModule({
  declarations: [UnitListComponent, UnitDetailComponent],
  imports: [
    CommonModule,
    UnitRoutingModule
  ]
})
export class UnitModule { }
