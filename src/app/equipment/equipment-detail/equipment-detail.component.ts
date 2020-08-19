import { Component, Inject, Injector } from '@angular/core';
import { Equipment } from '../equipment';
import { DetailBase } from 'src/app/core/detail-base.component';
import { EquipmentService } from '../equipment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss']
})
export class EquipmentDetailComponent extends DetailBase<Equipment, EquipmentService> {

  categories: Category[];

  constructor(service: EquipmentService, private categoryService: CategoryService, injector: Injector) {
    super(service, Equipment, injector);
  }

  public createFormGroup(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      category: ['', Validators.required],
    }); 
  }

  onLoad() {
    super.onLoad();
    this.loadCategories();
  }

  loadCategories(){
    this.categoryService.findAll().subscribe(categories => this.categories = categories);
  }

}
