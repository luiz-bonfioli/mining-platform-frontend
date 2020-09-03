import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from '../../core/service-base';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends ServiceBase<Team> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'team' }, injector);
  }

}
