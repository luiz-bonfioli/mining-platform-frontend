import { Injectable, Injector } from '@angular/core';
import { ServiceBase } from './../core/service-base';
import { Equipment } from './equipment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends ServiceBase<Equipment> {

  constructor(injector: Injector) {
    super({ RESOURCE: 'equipment' }, injector);
  }

  public findByCategoryId(categoryId: string): Observable<Equipment[]> {
    return this.httpClient.get<Equipment[]>(`${this.resource['RESOURCE']}/find-by-category-id/${categoryId}`)
               .pipe(map(response => response as Equipment[]));
  }

}
