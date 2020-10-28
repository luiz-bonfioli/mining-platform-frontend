import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionOrderListComponent } from './production-order-list/production-order-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductionOrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionOrderRoutingModule { }
