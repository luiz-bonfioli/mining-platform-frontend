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
        path: 'equipment-list', loadChildren: () => import('./equipment/equipment.module').then(mod => mod.EquipmentModule),
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
