import { Component, Injector } from '@angular/core';
import { ListBase } from '../core/list-base.component';
import { Routes } from '../core/routes';
import { ProductionOrder } from '../planning/production-order/production-order';
import { ProductionOrderService } from '../planning/production-order/production-order.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent extends ListBase<ProductionOrder, ProductionOrderService> {

  constructor(service: ProductionOrderService, injector: Injector) {
    super(service, { "ROUTE": Routes.PRODUCTION_ORDER_ROUTE }, injector)
  }
}