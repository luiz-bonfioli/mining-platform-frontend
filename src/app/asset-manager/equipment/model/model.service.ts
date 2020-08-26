import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../../core/service-base';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ModelService extends ServiceBase<Model> {
  constructor(injector: Injector) {
    super({ RESOURCE: 'equipment/model' }, injector);
  }
}
