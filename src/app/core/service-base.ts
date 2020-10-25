import { HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataResponse } from './data-response';
import { Direction } from './direction.enum';
import { ModelBase } from './model-base';
import { Service } from './service';

export class ServiceBase<M extends ModelBase> extends Service {

  public fetchItems(page: number, size: number, sort: string[] = ['id'], direction: string = Direction.ASC, search: string[] = []): Observable<DataResponse<M>> {
    let params: HttpParams = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('direction', direction);

    sort.map(sort => params = params.append('sort', sort));
    search.map(search => params = params.append('search', search));

    const response = this.httpClient
      .get<M[]>(`${this.resource['RESOURCE']}/find-by-params`, { params: params, observe: 'response' })
      .pipe(map(response => new DataResponse<M>(response.body as M[], +response.headers.get('X-Total-Elements'))));

    return response;
  }

  public fetchChildren(parentId: string, page: number, size: number, sort: string[] = ['id'], direction: string = Direction.ASC, search: string[] = []): Observable<DataResponse<M>> {
    let params: HttpParams = new HttpParams()
      .set('parentId', parentId.toString())
      .set('page', page.toString())
      .set('size', size.toString())
      .set('direction', direction);

    sort.map(sort => params = params.append('sort', sort));
    search.map(search => params = params.append('search', search));

    const response = this.httpClient
      .get<M[]>(`${this.resource['RESOURCE']}/find-by-parent-and-params`, { params: params, observe: 'response' })
      .pipe(map(response => new DataResponse<M>(response.body as M[], +response.headers.get('X-Total-Elements'))));

    return response;
  }

  public findAll(): Observable<M[]> {
    return this.httpClient.get<M[]>(`${this.resource['RESOURCE']}/all`).pipe(map(response => response as M[]));
  }

  // public fetchChildren(
  //   startingAt: number,
  //   maxPerPage: number,
  //   sortOrder: number,
  //   sortField: string,
  //   parentId: number
  // ): Observable<DataResponse<M>> {
  //   let params: HttpParams = new HttpParams();
  //   params.set('startingAt', startingAt.toString());
  //   params.set('maxPerPage', maxPerPage.toString());
  //   params.set('sort', sortOrder.toString());
  //   params.set('field', sortField ? sortField : '');
  //   params.set('parentId', parentId.toString());

  //   let response = this.httpClient
  //     .get<M[]>(`${this.resource['RESOURCE']}/children`, { params: params, observe: 'response' })
  //     .pipe(map(response => new DataResponse<M>(response.body as M[], +response.headers.get('X-Total-Elements'))));
  //   return response;
  // }

  public fetchParent(id: string): Observable<M> {
    return this.httpClient.get<M>(`${this.resource['PARENT_RESOURCE']}/${id}`).pipe(map(response => response as M));
  }

  public fetchItem(id: string): Observable<M> {
    return this.httpClient.get<M>(`${this.resource['RESOURCE']}/${id}`).pipe(map(response => response as M));
  }

  public delete(item: M): Observable<HttpResponse<object>> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.delete(`${this.resource['RESOURCE']}/${item.id}`, { headers: headers, observe: 'response' });
  }

  public save(item: M): Observable<M> {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  private post(item: M): Observable<M> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<M>(this.resource['RESOURCE'], item, { headers: headers }).pipe(map(response => response as M));
  }

  private put(item: M): Observable<M> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<M>(this.resource['RESOURCE'], item, { headers: headers }).pipe(map(response => response as M));
  }
}
