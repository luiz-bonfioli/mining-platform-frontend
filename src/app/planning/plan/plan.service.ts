import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService extends ServiceBase<Plan> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'plan' }, injector);
  }

}
