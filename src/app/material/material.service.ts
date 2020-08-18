import { Injectable, Injector } from '@angular/core';

import { ServiceBase } from './../core/service-base';
import { Material } from './material';


@Injectable({
  providedIn: 'root'
})
export class MaterialService extends ServiceBase<Material>
{
  constructor(injector: Injector) { super({ 'RESOURCE': 'material' }, injector); }
}