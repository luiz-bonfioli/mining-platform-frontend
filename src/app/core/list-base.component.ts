import { Injector, OnInit, Directive } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Location } from '@angular/common'

import { ModelBase } from './model-base'
import { ServiceBase } from './service-base'
import { MenuItem } from './action-menu/menu-item'
import { ContextService } from './context/context.service'
import { DataResponse } from './data-response'
import { Direction } from './direction.enum'
import { IPageInfo } from 'ngx-virtual-scroller'

@Directive()
export abstract class ListBase<M extends ModelBase, S extends ServiceBase<M>> implements OnInit {
  /**
   *  Pagination setup
   */
  public currentPage: number = 0
  public maxPerPage: number = 30
  public totalItems: number

  /**
   * ListBase properties
   */
  public items: M[] = []
  public selectedItem: M
  public parent: ModelBase

  private parentId: string = null
  public menuItems: MenuItem[]

  protected router: Router = this.injector.get(Router)
  protected location: Location = this.injector.get(Location)
  protected activatedRoute: ActivatedRoute = this.injector.get(ActivatedRoute)
  protected context: ContextService = this.injector.get(ContextService)

  constructor(protected service: S, protected route: { [key: string]: string }, protected injector: Injector) { }

  ngOnInit(): void {
    this.fetchRouteParameters()
    this.createMenu()
    this.onLoad()
  }

  public search(input: string): void {
    this.fetchItems(0, this.maxPerPage, [], Direction.ASC, [`name:${input}`])
  }

  protected onLoad(): void {
    if (!this.parentId) {
      this.fetchItems(this.currentPage, this.maxPerPage, [], Direction.ASC, [])
    }
    else {
      this.fetchChildren(this.parentId, this.currentPage, this.maxPerPage, [], Direction.ASC, [])
    }
  }

  protected loadChildren(parentId: string): void {
    if (!parentId) {
      //this.router.navigate([this.route['ROUTE'], { relativeTo: this.route }])
      this.router.navigate([this.route['ROUTE']])
    } else {
      this.router.navigate([this.route['ROUTE'], parentId, this.route['CHILDREN_ROUTE']])
    }
  }

  protected createMenu(): void {
    this.menuItems = new Array<MenuItem>()

    let newMenu = new MenuItem()
    newMenu.label = 'New'
    newMenu.icon = 'add_circle'
    newMenu.class = 'btn-primary'
    newMenu.action = () => this.newItem()
    this.addMenuItem(newMenu)

    // let removeMenu = new MenuItem()
    // removeMenu.icon = 'delete'
    // removeMenu.class = 'red-btn'
    // removeMenu.action = () => this.removeItem()
    // this.addMenuItem(removeMenu)
  }

  protected addMenuItem(item: MenuItem): void {
    this.menuItems.push(item)
  }

  // public onLazyLoad(event: LazyLoadEvent): void {
  //   this.fetchRouteParameters()
  //   this.fetchList(event)
  // }

  private fetchRouteParameters(): void {
    this.activatedRoute.params.subscribe(params => {
      this.fetchParentIdParameter(params)
    })
  }

  private fetchParentIdParameter(params: Params): void {
    if (params['parentId'] !== undefined) {
      this.parentId = params['parentId']
    }
  }

  public onPageChanged(event: IPageInfo) {
    if (event.endIndex !== -1 && event.endIndex === this.items.length - 1) {
      let page = Math.ceil(event.endIndex / this.maxPerPage)
      if (page != this.currentPage) {
        this.currentPage = page
        console.log(this.currentPage)
        this.fetchItems(this.currentPage, this.maxPerPage, [], Direction.ASC, [])
      }
    }
  }

  public fetchItems(page: number, size: number, sort: string[], direction: string, search: string[]): void {
    this.service.fetchItems(page, size, sort, direction, search).subscribe(response => this.parseResponse(response))
  }

  public fetchChildren(parentId: string, page: number, size: number, sort: string[], direction: string, search: string[]): void {
    this.service.fetchChildren(parentId, page, size, sort, direction, search).subscribe(response => this.parseResponse(response))
  }

  protected parseResponse(response: DataResponse<M>) {
    this.items = this.items.concat(response.items.map(item => {
      return this.mapItem(item)
    }))
    this.totalItems = response.totalItems
  }

  protected mapItem(item: M): M {
    return item
  }

  public newItem(): void {
    if (this.parentId != null) {
      this.router.navigate([this.route['PARENT_ROUTE'], this.parentId, this.route['ROUTE']])
    } else {
      //this.router.navigate([this.route['ROUTE'], { relativeTo: this.route }])
      this.router.navigate([this.route['ROUTE']])
    }
  }

  public updateItem(selected: M): void {
    if (this.parentId != null) {
      this.router.navigate([this.route['PARENT_ROUTE'], this.parentId, this.route['ROUTE'], selected.id])
    } else {
      this.router.navigate([this.route['ROUTE'], selected.id])
    }
  }

  public showChildren(selected: ModelBase): void {
    let parentRoute = this.route['ROUTE']
    let childrenRoute = this.route['CHILDREN_ROUTE']
    this.router.navigate([parentRoute, selected.id, childrenRoute])
  }

  public removeItem(): void {
    // this.confirmationService.confirm(
    //   {
    //       header: this.translate.instant('MESSAGE_CONFIRM_TITLE'),
    //       message: this.translate.instant('MESSAGE_CONFIRM_DELETE'),
    //       icon: 'fa ui-icon-warning',
    //       accept: () =>
    //       {
    //         this.service.delete(this.selected).then(response => {
    //           if (response.ok) {
    //             this.items.splice(this.items.indexOf(this.selected), 1)
    //             this.selected = null
    //             this.dataTable.reset()
    //           }
    //         })
    //       }
    //   })
  }

  public back(): void {
    this.location.back()
  }
}
