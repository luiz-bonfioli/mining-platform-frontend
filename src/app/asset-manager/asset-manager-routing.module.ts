import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetManagerComponent } from './asset-manager.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: AssetManagerComponent,
    children: [
      {
        path: 'equipment', loadChildren: () => import('./equipment/equipment.module').then(mod => mod.EquipmentModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'device', loadChildren: () => import('./device/device.module').then(mod => mod.DeviceModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'state', loadChildren: () => import('./state/state.module').then(mod => mod.StateModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'checklist', loadChildren: () => import('./checklist/checklist.module').then(mod => mod.ChecklistModule),
        canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagerRoutingModule { }
