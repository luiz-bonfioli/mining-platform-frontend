import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Organization } from './organization';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService extends ServiceBase<Organization> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'organization' }, injector);
  }

}
