import { Component, Input } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input()
  public title: string;

  @Input()
  public items: MenuItem[];
}
