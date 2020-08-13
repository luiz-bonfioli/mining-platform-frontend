import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TreeModelBase } from './tree-model-base';
import { TreeServiceBase } from './tree-service-base';

/**
 *
 */
export class TreeListBase<M extends TreeModelBase, S extends TreeServiceBase<M>> {
  /**
   *
   */
  //public items: TreeNode[];

  /**
   *
   */
  //public selected: TreeNode;

  /**
   *
   */
  private parentId: number = null;

  private router: Router = this.injector.get(Router);
  protected activatedRoute: ActivatedRoute = this.injector.get(ActivatedRoute);

  /**
   *
   * @param service
   * @param route
   * @param injector
   */
  constructor(private service: S, protected route: { [key: string]: string }, private injector: Injector) {}

  /**
   *
   */
  ngOnInit(): void {
    this.fetchTree();
  }

  /**
   * Fetch the root tree
   */
  public fetchTree(): void {
    //this.service.getTreeNodes(null).then(response => this.parseTreeNode(response));
  }

  /**
   *
   * @param response
   */
  private parseTreeNode(response: M[]) {
    // this.items = response.map<TreeNode>(function (item) {
    //   let node = { data: item, leaf: false };
    //   return node;
    // });
  }

  /**
   *
   * @param event
   */
  // public fetchChildren(event): void {
  //   if (event.node) {
  //     this.service.getTreeNodes(event.node.data.id).then(response => this.parseChildren(event.node, response));
  //   }
  //}

  /**
   *
   * @param parent
   * @param response
   */
  // private parseChildren(parent: TreeNode, response: M[]) {
  //   parent.children = response.map<TreeNode>(function (item) {
  //     let node = { data: item, parent: parent, leaf: item.leaf };
  //     return node;
  //   });
  //}

  /**
   *
   */
  // public newItem(): void {
  //   if (this.selected) {
  //     this.router.navigate([this.route['ROUTE'], this.selected.data.id, this.route['CHILDREN_ROUTE']]);
  //   }
  //   else {
  //     this.router.navigate([this.route['ROUTE']]);
  //   }
  // }

  /**
   *
   */
  // public updateItem(): void {
  //   if (this.selected) {
  //     if (this.selected.parent) {
  //       this.router.navigate([this.route['ROUTE'], this.selected.parent.data.id, this.route['CHILDREN_ROUTE'], this.selected.data.id]);
  //     }
  //     else {
  //       this.router.navigate([this.route['ROUTE'], this.selected.data.id]);
  //     }
  //   }
  // }

  /**
   *
   */
  // public showItem(): void {
  //   // TODO [LFB]
  //   this.router.navigate([this.route['ROUTE'], this.selected.data.id], { queryParams: { readOnly: true } });
  // }

  /**
   *
   */
  // public removeItem(): void {
  //   this.service.delete(this.selected.data).subscribe(response => {
  //     if (response.ok) {
  //       if (this.selected.parent) {
  //         this.selected.parent.children.splice(this.selected.parent.children.indexOf(this.selected), 1);
  //       }
  //       else {
  //         this.items.splice(this.items.indexOf(this.selected), 1);
  //       }
  //     }
  //   });
  // }
}
