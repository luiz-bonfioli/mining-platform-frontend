import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public items: MenuItem[];

  @Input()
  public formInvalid: boolean;

  @Input()
  public searchVisible: boolean;

  @Output()
  public search: EventEmitter<string>;

  public searchInputControl: FormControl;

  constructor(){
    this.search = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.createSearchInput()
  }

  protected createSearchInput(): void {
    this.searchInputControl = new FormControl();
    this.searchInputControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(searchInput =>
      this.search.emit(searchInput)
    );
  }
}
