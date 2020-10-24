import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { Location } from '../../location/location';
import { LocationService } from '../../location/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent extends ListBase<Location, LocationService> {

  constructor(service: LocationService, injector: Injector) {
    super(service, { ROUTE: Routes.LOCATION_ROUTE, CHILDREN_ROUTE: Routes.CHILD_ROUTE }, injector);
  }

}