import { Component, Injector } from '@angular/core';
import { Equipment } from '../equipment';
import { DetailBase } from 'src/app/core/detail-base.component';
import { RequireMatch } from 'src/app/core/validators/require-match';
import { EquipmentService } from '../equipment.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { Model } from '../model/model';
import { ModelService } from '../model/model.service';
import { Observable } from 'rxjs';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { Direction } from 'src/app/core/direction.enum';

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
      category: ['', Validators.required],
      model: ['', Validators.required]
    });
  }

  onLoad() {
    super.onLoad();
    //  this.loadCategories();
    this.loaModels();

    this.myControl.valueChanges.pipe(
      debounceTime(500),
      tap(() => {
        this.categories = [];
        this.isLoading = true;
      }),
      switchMap(value => this.categoryService.fetchItems(0, 10, ['name'], Direction.ASC, [`name:${value}`, `age:${value}`])
        .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe(data => {
        this.categories = data.items;
    });
  }

  // loadCategories() {
  //   this.categoryService.findAll().subscribe(categories => this.categories = categories);
  // }

  loaModels() {
    this.modelService.findAll().subscribe(models => this.models = models);
  }

  isLoading = false;

  myControl = new FormControl('', [Validators.required, RequireMatch]);

  displayFn(category: Category): string {
    return category && category.name ? category.name : '';
  }

}
