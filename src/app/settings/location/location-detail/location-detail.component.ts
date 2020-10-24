import { Component, Injector } from '@angular/core';
import { DetailBase } from 'src/app/core/detail-base.component';
import { LocationService } from '../location.service';
import { Location } from '../location';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent extends DetailBase<Location, LocationService> {

  constructor(service: LocationService, injector: Injector) {
    super(service, Location, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

}