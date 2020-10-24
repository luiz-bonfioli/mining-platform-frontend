import { Injectable, Injector } from '@angular/core'

import { ServiceBase } from '../../core/service-base'
import { Unit } from './unit'


@Injectable({
  providedIn: 'root'
})
export class UnitService extends ServiceBase<Unit>
{
  constructor(injector: Injector) { super({ 'RESOURCE': 'unit' }, injector) }
}