import { Component, Inject, Injector } from '@angular/core'
import { FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DetailBase } from 'src/app/core/detail-base.component'
import { Organization } from '../organization'
import { OrganizationService } from '../organization.service'

@Component({
  selector: 'app-organization-detail-dialog',
  templateUrl: './organization-detail-dialog.component.html',
  styleUrls: ['./organization-detail-dialog.component.scss']
})
export class OrganizationDetailDialogComponent extends DetailBase<Organization, OrganizationService> {

  constructor(service: OrganizationService, injector: Injector,
    dialog: MatDialogRef<OrganizationDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public currentItemId: string) {
    super(service, Organization, injector, dialog)
  }

  protected fetchItem(): void {
    this.beforeLoad()
    if (this.currentItemId !== null) {
      this.service.fetchItem(this.currentItemId)
        .subscribe(item => { this.formDetail.patchValue(item); this.afterLoad() })
    }
    else {
      this.currentItem = new Organization()
    }
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

}