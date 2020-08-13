import { Service } from './service';
import { ModelBase } from './model-base';
import { DataResponse } from './data-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';

export class ServiceBase<M extends ModelBase> extends Service {
  
  public fetchItems(
    startingAt: number,
    maxPerPage: number,
    sortOrder: number,
    sortField: string,
    globalFilter: string
  ): Observable<DataResponse<M>> {
    const params: HttpParams = new HttpParams();
    params.set('startingAt', startingAt.toString());
    params.set('maxPerPage', maxPerPage.toString());
    params.set('sort', sortOrder.toString());
    params.set('field', sortField ? sortField : '');
    params.set('globalFilter', globalFilter ? globalFilter : '');
    const response = this.httpClient
      .get<M[]>(this.resource['RESOURCE'], { params: params, observe: 'response' })
      .pipe(map(response => new DataResponse<M>(response.body as M[], +response.headers.get('X-Pagination-Count'))));
    return response;
  }

  public findAll(): Observable<M[]> {
    return this.httpClient.get<M[]>(`${this.resource['RESOURCE']}/all`).pipe(map(response => response as M[]));
  }

  public fetchChildren(
    startingAt: number,
    maxPerPage: number,
    sortOrder: number,
    sortField: string,
    parentId: number
  ): Observable<DataResponse<M>> {
    let params: HttpParams = new HttpParams();
    params.set('startingAt', startingAt.toString());
    params.set('maxPerPage', maxPerPage.toString());
    params.set('sort', sortOrder.toString());
    params.set('field', sortField ? sortField : '');
    params.set('parentId', parentId.toString());

    let response = this.httpClient
      .get<M[]>(`${this.resource['RESOURCE']}/children`, { params: params, observe: 'response' })
      .pipe(map(response => new DataResponse<M>(response.body as M[], +response.headers.get('X-Pagination-Count'))));
    return response;
  }

  public fetchParent(id: number): Observable<M> {
    return this.httpClient.get<M>(`${this.resource['PARENT_RESOURCE']}/${id}`).pipe(map(response => response as M));
  }

  public fetchItem(id: number): Observable<M> {
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
