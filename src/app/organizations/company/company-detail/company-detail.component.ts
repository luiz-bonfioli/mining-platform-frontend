import { Component, Injector } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { DetailBase } from 'src/app/core/detail-base.component';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent extends DetailBase<Company, CompanyService> {

  constructor(service: CompanyService, injector: Injector) {
    super(service, Company, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

}