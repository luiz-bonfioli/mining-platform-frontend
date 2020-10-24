import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'unit', loadChildren: () => import('./unit/unit.module').then(mod => mod.UnitModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'material', loadChildren: () => import('./material/material.module').then(mod => mod.MaterialModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'location', loadChildren: () => import('./location/location.module').then(mod => mod.LocationModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'state', loadChildren: () => import('./state/state.module').then(mod => mod.StateModule),
        canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
