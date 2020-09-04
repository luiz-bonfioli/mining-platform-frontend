import { Component, Injector } from '@angular/core';
import { Equipment } from '../equipment';
import { ListBase } from 'src/app/core/list-base.component';
import { EquipmentService } from '../equipment.service';
import { CategoryService } from '../category/category.service';
import { Routes } from 'src/app/core/routes';
import { Category } from '../category/category';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent extends ListBase<Equipment, EquipmentService> {

  categories: Category[]  
  isOpen: boolean

  constructor(service: EquipmentService, private categoryService: CategoryService, injector: Injector) {
    super(service, { "ROUTE": Routes.EQUIPMENT_ROUTE }, injector);
  }

  onLoad() {
    super.onLoad();
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.findAll().subscribe(categories => this.categories = categories);
  }

  findByCategory(category: Category) {
    if (category) {
      this.service.findByCategoryId(category.id).subscribe(equipments => this.items = equipments);
    }
    else {
      super.onLoad();
    }
  }
}