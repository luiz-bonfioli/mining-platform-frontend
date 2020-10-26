import { Component, Injector } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ListBase } from 'src/app/core/list-base.component'
import { RouteBehavior } from 'src/app/core/route-behavior/route-behavior.enum'
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

  constructor(service: OrganizationService, protected dialog: MatDialog, injector: Injector) {
    super(service, { "ROUTE": Routes.ORGANIZATION_ROUTE }, injector, RouteBehavior.OPEN_DIALOG)
  }

  openDialog(selected: Organization) {
    const dialogRef = this.dialog.open(OrganizationDetailDialogComponent, {
      data: selected?.id,
      backdropClass: 'dialog-backdrop',
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(result => {

    })
  }

}
