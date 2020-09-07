import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../../core/service-base';
import { ChecklistItem } from './checklist-item';

@Injectable({
  providedIn: 'root'
})
export class ChecklistItemService extends ServiceBase<ChecklistItem> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'checklist-item' }, injector);
  }

}
