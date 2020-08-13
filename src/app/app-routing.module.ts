import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard'

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    canActivate: [AuthenticationGuard]
  },  
  {
    path: 'equipment',
    loadChildren: () => import('./equipment/equipment.module').then(mod => mod.EquipmentModule),
    canActivate: [AuthenticationGuard]
  },

  {
    path: 'material',
    loadChildren: () => import('./material/material.module').then(mod => mod.MaterialModule),
    canActivate: [AuthenticationGuard]
  },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
