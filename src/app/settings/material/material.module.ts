import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialRoutingModule } from './material-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MaterialListComponent, MaterialDetailComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    SharedModule
  ]
})
export class MaterialModule { }
