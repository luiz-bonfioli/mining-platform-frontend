import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { PlanningComponent } from './planning.component';

const routes: Routes = [
  {
    path: '',
    component: PlanningComponent,
    children: [
      {
        path: 'plan', loadChildren: () => import('./plan/plan.module').then(mod => mod.PlanModule),
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'production-order', loadChildren: () => import('./production-order/production-order.module').then(mod => mod.ProductionOrderModule),
        canActivate: [AuthenticationGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
