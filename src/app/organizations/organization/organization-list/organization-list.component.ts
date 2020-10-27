import { Component, Injector } from '@angular/core'
import { ListBase } from 'src/app/core/list-base.component'
import { Routes } from 'src/app/core/routes'
import { Organization } from '../organization'
import { OrganizationDetailDialogComponent } from '../organization-detail-dialog/organization-detail-dialog.component'
import { OrganizationService } from '../organization.service'

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent extends ListBase<Organization, OrganizationService> {

  constructor(service: OrganizationService, injector: Injector) {
    super(service, { "ROUTE": Routes.ORGANIZATION_ROUTE }, injector, OrganizationDetailDialogComponent)
  }

  showItem(selected: Organization) {
    this.router.navigate([this.route['ROUTE'], selected.id])
  }

}
