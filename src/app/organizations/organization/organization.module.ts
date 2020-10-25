import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';
import { OrganizationDetailDialogComponent } from './organization-detail-dialog/organization-detail-dialog.component';


@NgModule({
  declarations: [OrganizationListComponent, OrganizationDetailComponent, OrganizationDetailDialogComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ]
})
export class OrganizationModule { }
