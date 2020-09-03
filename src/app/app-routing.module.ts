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
    path: 'asset-manager',
    loadChildren: () => import('./asset-manager/asset-manager.module').then(mod => mod.AssetManagerModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'organizations',
    loadChildren: () => import('./organizations/organizations.module').then(mod => mod.OrganizationsModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'map-viewer',
    loadChildren: () => import('./map-viewer/map-viewer.module').then(mod => mod.MapViewerModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'planning',
    loadChildren: () => import('./planning/planning.module').then(mod => mod.PlanningModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'reporting',
    loadChildren: () => import('./reporting/reporting.module').then(mod => mod.ReportingModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'allocation',
    loadChildren: () => import('./allocation/allocation.module').then(mod => mod.AllocationModule),
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
