import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OperationListComponent } from './operation/operation-list/operation-list.component'
import { ProductionOrderListComponent } from './production-order-list/production-order-list.component'

const routes: Routes = [
  {
    path: 'list',
    component: ProductionOrderListComponent
  },
  {
    path: ':parentId/operation/list',
    component: OperationListComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionOrderRoutingModule { }
