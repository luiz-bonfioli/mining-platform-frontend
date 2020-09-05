import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends ServiceBase<Company> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'company' }, injector);
  }

}
