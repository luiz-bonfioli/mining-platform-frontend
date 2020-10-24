

import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends ServiceBase<Location> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'location' }, injector);
  }

}
