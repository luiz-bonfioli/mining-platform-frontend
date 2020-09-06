

import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends ServiceBase<Device> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'device' }, injector);
  }

}
