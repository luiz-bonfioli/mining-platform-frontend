//import { URLSearchParams } from '@angular/http';

import { TreeModelBase } from './tree-model-base';
import { ServiceBase } from './service-base';

export class TreeServiceBase<M extends TreeModelBase> extends ServiceBase<M> {
  // public getTreeNodes(parentId: number): Promise<M[]> {
  //     let params: URLSearchParams = new URLSearchParams();
  //     params.set('parentId', parentId ? parentId.toString() : null);
  //     let response = this.http.get(`${this.resource['RESOURCE']}/tree`, { search: params }).toPromise().then(response => {
  //         return response.json() as M[];
  //     })
  //     .catch((error) => this.handleError(error, this.messageService));
  //     return response;
  // }
}
