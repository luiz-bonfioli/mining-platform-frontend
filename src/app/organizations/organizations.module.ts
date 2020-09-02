import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent, DialogContentExampleDialog } from './organizations.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [OrganizationsComponent, DialogContentExampleDialog],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    SharedModule
  ]
})
export class OrganizationsModule { }
