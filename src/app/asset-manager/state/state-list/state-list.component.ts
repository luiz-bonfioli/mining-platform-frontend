import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { State } from '../../state/state';
import { StateService } from '../../state/state.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.scss']
})
export class StateListComponent extends ListBase<State, StateService> {

  constructor(service: StateService, injector: Injector) {
    super(service, { ROUTE: Routes.STATE_ROUTE, CHILDREN_ROUTE: Routes.CHILD_ROUTE }, injector);
  }

}
