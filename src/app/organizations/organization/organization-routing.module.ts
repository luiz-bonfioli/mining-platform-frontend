import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OrganizationDetailComponent } from './organization-detail/organization-detail.component'
import { OrganizationListComponent } from './organization-list/organization-list.component'

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
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
