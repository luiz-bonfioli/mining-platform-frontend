import { Component, Injector, Inject } from '@angular/core';
import { Organization } from '../organization';
import { DetailBase } from 'src/app/core/detail-base.component';
import { OrganizationService } from '../organization.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent extends DetailBase<Organization, OrganizationService> {

  constructor(service: OrganizationService, injector: Injector) {
    super(service, Organization, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
