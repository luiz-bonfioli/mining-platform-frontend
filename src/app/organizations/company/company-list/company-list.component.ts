import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent extends ListBase<Company, CompanyService> {

  constructor(service: CompanyService, injector: Injector) {
    super(service, { "ROUTE": Routes.COMPANY_ROUTE }, injector);
  }

}
