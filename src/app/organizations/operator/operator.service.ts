import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Operator } from './operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService extends ServiceBase<Operator> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'operator' }, injector);
  }

}
