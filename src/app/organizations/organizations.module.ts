import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';


@NgModule({
  declarations: [OrganizationsComponent],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    SharedModule
  ]
})
export class OrganizationsModule { }
