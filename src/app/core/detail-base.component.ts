import { Injector } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ModelBase } from './model-base';
import { HierarchicalModelBase } from './hierarchical-model-base';;
import { ServiceBase } from './service-base';
import { MenuItem } from './action-menu/menu-item';
import { ContextService } from './context/context.service';
import { FormBuilder, FormGroup, FormControl, Form } from '@angular/forms';

/**
 * 
 */
export abstract class DetailBase<M extends ModelBase | HierarchicalModelBase, S extends ServiceBase<M>>
{
  protected currentItem: M;

  private readOnly: boolean;
  private id: number = null;
  private parentId: number = null;
  private menuItems: MenuItem[];  
  
  public formDetail: FormGroup;

  // Services injection
  protected formBuilder: FormBuilder = this.injector.get(FormBuilder);
  protected location: Location = this.injector.get(Location);
  protected activatedRoute: ActivatedRoute = this.injector.get(ActivatedRoute);
  protected context: ContextService = this.injector.get(ContextService);
  
  constructor(protected service: S, private modelType: { new(): M; }, private injector: Injector) { }

  beforeLoad(): void { }

  afterLoad(): void { }

  ngOnInit(): void {
    this.createForm();
    this.fetchRouteParameters();
    this.fetchItem();
    this.fetchParent();
    this.createMenu();
  }

  protected createForm(): void{
    this. formDetail = this.formBuilder.group(this.createFormControls());
  }

  protected abstract createFormControls(): Map<string, FormGroup | FormControl>;

  //public abstract createFormControls(): FormControl[];

  protected createMenu(): void {
    // let backMenu = new MenuItem();
		// backMenu.icon = 'ui-icon-arrow-back';
		// backMenu.class = 'green-btn';
    // backMenu.action = () => this.back();
    
    let saveMenu = new MenuItem();
		saveMenu.icon = 'ui-icon-save';
		saveMenu.class = 'green-btn';
    saveMenu.action = () => this.save();
    
    this.menuItems = new Array<MenuItem>();
   // this.addMenuItem(backMenu);
    this.addMenuItem(saveMenu);
  }

  public addMenuItem(item: MenuItem): void {
		this.menuItems.push(item);
  }

  public save(): void {
    this.beforeSave();
    this.service.save(this.currentItem).subscribe(item => {
      this.currentItem = item;
      this.afterSave();
      //this.back();
    });
  }

  protected fetchParent(): void {
    if (this.parentId !== null) {
      this.service.fetchParent(this.parentId)
        .subscribe(item => { this.setParent(item); });
    }
  }

  protected setParent(parent: ModelBase): void {      
      (this.currentItem as HierarchicalModelBase).parent = parent;
  }

  protected fetchItem(): void {
    this.beforeLoad();
    if (this.id !== null) {
      this.service.fetchItem(this.id)
        .subscribe(item => { this.formDetail.patchValue(item); this.afterLoad(); });
    }
    else {
      this.currentItem = new this.modelType();
    }
  }

  private fetchRouteParameters(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fetchReadOnlyParameter(params);
    });

    this.activatedRoute.params.subscribe(params => {
      this.fetchIdParameter(params);
      this.fetchParentIdParameter(params);
    });
  }

  private fetchReadOnlyParameter(params: Params): void {
    if (params['readOnly'] !== undefined) {
      this.readOnly = 'true' === params['readOnly'];
    }
  }

  private fetchIdParameter(params: Params): void {
    if (params['id'] !== undefined) {
      this.id = +params['id'];
    }
  }

  private fetchParentIdParameter(params: Params): void {
    if (params['parentId'] !== undefined) {
      this.parentId = +params['parentId'];
    }
  }

  // public back(): void {
  //   this.location.back();
  // }

  protected beforeSave(): void { 
    this.currentItem = this.formDetail.value as M;
    this.currentItem.id;
  }

  protected afterSave(): void { }
}