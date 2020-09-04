import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: OrganizationListComponent
  },

  {
    path: '',
    component: OrganizationDetailComponent
  },

  {
    path: ':id',
    component: OrganizationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
