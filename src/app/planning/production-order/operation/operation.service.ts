import { Injectable, Injector } from '@angular/core'
import { ServiceBase } from '../../../core/service-base'
import { Operation } from './operation'

@Injectable({
  providedIn: 'root'
})
export class OperationService extends ServiceBase<Operation> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'operation', PARENT_RESOURCE: 'production-order' }, injector)
  }

}
