import { Location } from '@angular/common'
import { Directive, Injector } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ActivatedRoute, Params } from '@angular/router'
import { MenuItem } from './action-menu/menu-item'
import { ContextService } from './context/context.service'
import { DialogData } from './dialog-data'
import { HierarchicalModelBase } from './hierarchical-model-base'
import { ModelBase } from './model-base'
import { RouteBehavior } from './route-behavior/route-behavior.enum'
import { ServiceBase } from './service-base'

@Directive()
export abstract class DetailBase<M extends ModelBase | HierarchicalModelBase, S extends ServiceBase<M>>
{
  public currentItem: M

  private routeBehavior: RouteBehavior
  private parentId: string = null
  public menuItems: MenuItem[]

  public formDetail: FormGroup

  protected dialogData: DialogData
  protected selectedId: string
  protected formBuilder: FormBuilder = this.injector.get(FormBuilder)
  protected location: Location = this.injector.get(Location)
  protected activatedRoute: ActivatedRoute = this.injector.get(ActivatedRoute)
  protected context: ContextService = this.injector.get(ContextService)

  constructor(protected service: S, private modelType: { new(): M }, private injector: Injector,
    private dialogRef: MatDialogRef<any> = null) {
    this.routeBehavior = dialogRef ? RouteBehavior.OPEN_DIALOG : RouteBehavior.NEW_PAGE
    this.dialogData = dialogRef ? this.injector.get(MAT_DIALOG_DATA) : null
    this.selectedId = this.dialogData?.selectedId
    this.parentId = this.dialogData?.parentId
  }

  beforeLoad(): void { }

  afterLoad(): void { }

  ngOnInit(): void {
    this.createForm()
    this.fetchRouteParameters()
    this.fetchItem()
    this.fetchParent()
    this.createMenu()
    this.onLoad()
  }

  compareWith(source: ModelBase, target: ModelBase): boolean {
    return source && target ? source.id === target.id : source === target
  }

  protected createForm(): void {
    this.formDetail = this.createFormGroup()
  }

  protected abstract createFormGroup(): FormGroup

  //public abstract createFormControls(): FormControl[]

  protected createMenu(): void {
    let backMenu = new MenuItem()
    backMenu.label = 'Back'
    backMenu.icon = 'backspace'
    //	backMenu.class = 'green-btn'
    backMenu.action = () => this.navigate()

    let saveMenu = new MenuItem()
    saveMenu.label = 'Save'
    saveMenu.icon = 'save'
    saveMenu.class = 'btn-primary'
    saveMenu.action = () => this.save()

    this.menuItems = new Array<MenuItem>()
    this.addMenuItem(backMenu)
    this.addMenuItem(saveMenu)
  }

  public addMenuItem(item: MenuItem): void {
    this.menuItems.push(item)
  }

  public save(): void {
    this.beforeSave()
    this.service.save(this.currentItem).subscribe(item => {
      this.currentItem = item
      this.afterSave()
    })
  }

  protected fetchParent(): void {
    if (this.parentId !== null) {
      this.service.fetchParent(this.parentId)
        .subscribe(item => { this.setParent(item) })
    }
  }

  protected setParent(parent: ModelBase): void {
    (this.currentItem as HierarchicalModelBase).parent = parent
  }

  protected fetchItem(): void {
    this.beforeLoad()
    if (this.selectedId) {
      this.service.fetchItem(this.selectedId)
        .subscribe(item => { this.formDetail.patchValue(item); this.afterLoad() })
    }
    else {
      this.currentItem = new this.modelType()
    }
  }

  private fetchRouteParameters(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fetchReadOnlyParameter(params)
    })

    this.activatedRoute.params.subscribe(params => {
      this.fetchIdParameter(params)
      this.fetchParentIdParameter(params)
    })
  }

  private fetchReadOnlyParameter(params: Params): void {
    if (params['readOnly'] !== undefined) {
      //this.readOnly = 'true' === params['readOnly']
    }
  }

  private fetchIdParameter(params: Params): void {
    if (params['id'] !== undefined) {
      this.selectedId = params['id']
    }
  }

  private fetchParentIdParameter(params: Params): void {
    if (params['parentId'] !== undefined) {
      this.parentId = params['parentId']
    }
  }

  protected beforeSave(): void {
    this.currentItem = this.formDetail.value as M
  }

  protected afterSave(): void {
    this.navigate()
  }

  public navigate(): void {
    switch (this.routeBehavior) {
      case RouteBehavior.NEW_PAGE:
        this.location.back()
        break
      case RouteBehavior.OPEN_DIALOG:
        this.closeDialog()
        break
    }
  }

  protected onLoad(): void { }

  public closeDialog() {
    this.dialogRef.close(this.currentItem)
  }
}