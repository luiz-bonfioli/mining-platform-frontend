import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Checklist } from './checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService extends ServiceBase<Checklist> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'checklist' }, injector);
  }

}
