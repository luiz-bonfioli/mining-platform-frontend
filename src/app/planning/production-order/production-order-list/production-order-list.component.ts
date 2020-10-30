import { Component, Injector } from '@angular/core'
import { ListBase } from 'src/app/core/list-base.component'
import { Routes } from 'src/app/core/routes'
import { ProductionOrder } from '../production-order'
import { ProductionOrderDetailDialogComponent } from '../production-order-detail-dialog/production-order-detail-dialog.component'
import { ProductionOrderService } from '../production-order.service'

@Component({
  selector: 'app-production-order-list',
  templateUrl: './production-order-list.component.html',
  styleUrls: ['./production-order-list.component.scss']
})
export class ProductionOrderListComponent extends ListBase<ProductionOrder, ProductionOrderService> {

  constructor(service: ProductionOrderService, injector: Injector) {
    super(service, { "ROUTE": Routes.PRODUCTION_ORDER_ROUTE }, injector, ProductionOrderDetailDialogComponent)
  }

  showOperations(selected: ProductionOrder) {
    this.router.navigate([this.route['ROUTE'], selected.id, 'operation', 'list'])
  }

}