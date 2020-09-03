import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationsComponent } from './organizations.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent,
    children: [
      {
        path: 'organization', loadChildren: () => import('./organization/organization.module').then(mod => mod.OrganizationModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'team', loadChildren: () => import('./team/team.module').then(mod => mod.TeamModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'operator', loadChildren: () => import('./operator/operator.module').then(mod => mod.OperatorModule),
        canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule { }
