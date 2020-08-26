import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../../core/service-base';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ServiceBase<Category> {
  constructor(injector: Injector) {
    super({ RESOURCE: 'equipment/category' }, injector);
  }
}
