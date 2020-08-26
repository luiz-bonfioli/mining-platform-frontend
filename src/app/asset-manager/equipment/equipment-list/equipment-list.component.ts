import { Component, Injector, OnInit } from '@angular/core';
import { Equipment } from '../equipment';
import { ListBase } from 'src/app/core/list-base.component';
import { EquipmentService } from '../equipment.service';
import { CategoryService } from '../category/category.service';
import { Routes } from 'src/app/core/routes';
import { Category } from '../category/category';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Direction } from 'src/app/core/direction.enum';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent extends ListBase<Equipment, EquipmentService> {

  categories: Category[]
  ds = new MyDataSource(this.service);

  constructor(service: EquipmentService, private categoryService: CategoryService, injector: Injector) {
		super(service, { "ROUTE": Routes.EQUIPMENT_ROUTE }, injector);
  }

  onLoad() {
    super.onLoad();
    this.loadCategories();
  }

  loadCategories(){
    this.categoryService.findAll().subscribe(categories => this.categories = categories);
  }

  findByCategory(category: Category){
    if(category){
      this.service.findByCategoryId(category.id).subscribe(equipments => this.items = equipments);
    }
    else{
      super.onLoad();
    }
  }
 
}

export class MyDataSource extends DataSource<Equipment> {

private PAGE_SIZE = 10;
  private fetchedPages = new Set<number>();
 
  private cachedData = [];
  private dataStream = new BehaviorSubject<Equipment[]>(this.cachedData);
 
  private subscription = new Subscription();
  service: EquipmentService;

  constructor(service: EquipmentService){
    super();
    this.service = service;
    this.fetchPage(0)
  }
 
  connect(collectionViewer: CollectionViewer): Observable<Equipment[]> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {
      
      const startPage = this.getPageForIndex(range.start);
      const endPage = this.getPageForIndex(range.end);
      for (let i = startPage; i <= endPage; i++) {
        this.fetchPage(i);        
      }

    //  console.log("startPage " + startPage)
     // console.log("endPage " + endPage)

    }));
 
    return this.dataStream;
  }
 
  disconnect(): void {
    this.subscription.unsubscribe();
  }
 
  private getPageForIndex(index: number): number {
    return Math.floor(index / this.PAGE_SIZE);
  }
 
  private fetchPage(page: number) {
    if (this.fetchedPages.has(page)) {
      return;
    }
    this.fetchedPages.add(page);
    console.log("fetchPage " + page)

    this.service.fetchItems(page, this.PAGE_SIZE, ["name"], Direction.ASC).subscribe(res => {
      this.cachedData = this.cachedData.concat(res.items);
      this.dataStream.next(this.cachedData);
    });
   
  }
}