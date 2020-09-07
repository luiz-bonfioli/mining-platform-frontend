import { Component, Injector } from '@angular/core';
import { Equipment } from '../equipment';
import { DetailBase } from 'src/app/core/detail-base.component';
import { EquipmentService } from '../equipment.service';
import { FormGroup, Validators } from '@angular/forms';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { Model } from '../model/model';
import { ModelService } from '../model/model.service';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss']
})
export class EquipmentDetailComponent extends DetailBase<Equipment, EquipmentService> {

  categories: Category[];
  models: Model[];

  constructor(service: EquipmentService,
    injector: Injector,
    private categoryService: CategoryService,
    private modelService: ModelService
  ) {

    super(service, Equipment, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      category: [null, Validators.required],
      model: [null, Validators.required],
      device: [null]
    });
  }

  onLoad() {
    super.onLoad();
    this.loadCategories();
    this.loaModels();
  }

  loadCategories() {
    this.categoryService.findAll().subscribe(categories => this.categories = categories);
  }

  loaModels() {
    this.modelService.findAll().subscribe(models => this.models = models);
  }
}
