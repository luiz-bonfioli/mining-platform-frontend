import { Component, Inject, Injector } from '@angular/core';
import { Equipment } from '../equipment';
import { DetailBase } from 'src/app/core/detail-base.component';
import { EquipmentService } from '../equipment.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss']
})
export class EquipmentDetailComponent extends DetailBase<Equipment, EquipmentService> {

  categories: Category[];
  selectedCategory: Category;

  constructor(service: EquipmentService, private categoryService: CategoryService, injector: Injector) {
    super(service, Equipment, injector);
  }

  public createFormControls(): Map<string, FormGroup | FormControl> {
    let map = new Map<string, FormGroup | FormControl>();
    map['id'] = new FormControl();
    map['name'] = new FormControl();
    map['shortName'] = new FormControl();
    map['category'] = new FormControl();

    return map;
  }

  onLoad() {
    super.onLoad();
    this.loadCategories();
  }

  loadCategories(){
    this.categoryService.findAll().subscribe(categories => this.categories = categories);
  }

  beforeSave(): void {
    super.beforeSave();
    this.currentItem.category = { id: "99734a99-d61c-4238-b564-31dc7eb39261", name: "Category Test" };
  }


}
