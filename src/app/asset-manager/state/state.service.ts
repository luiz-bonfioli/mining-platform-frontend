

import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class StateService extends ServiceBase<State> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'state' }, injector);
  }

}
