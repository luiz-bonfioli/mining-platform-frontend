import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { OrganizationService } from '../organization.service';
import { Organization } from '../organization';
import { MatDialog } from '@angular/material/dialog';
import { OrganizationDetailComponent } from '../organization-detail/organization-detail.component';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent extends ListBase<Organization, OrganizationService> {

  constructor(service: OrganizationService, protected dialog: MatDialog, injector: Injector) {
    super(service, { "ROUTE": Routes.ORGANIZATION_ROUTE }, injector);
  }

  openDialog() {
    const dialogRef = this.dialog.open(OrganizationDetailComponent, {
      data: this.selectedItem,
      backdropClass: 'dialog-backdrop'
    });
    //dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
