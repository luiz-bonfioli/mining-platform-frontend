import { Injectable, Injector } from '@angular/core';

import { ServiceBase } from './../core/service-base';
import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends ServiceBase<Equipment> {
  constructor(injector: Injector) {
    super({ RESOURCE: 'rest/equipment' }, injector);
  }
}
