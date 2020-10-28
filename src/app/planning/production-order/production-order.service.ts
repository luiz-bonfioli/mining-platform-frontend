import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { ProductionOrder } from './production-order';

@Injectable({
  providedIn: 'root'
})
export class ProductionOrderService extends ServiceBase<ProductionOrder> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'production-order' }, injector);
  }

}
