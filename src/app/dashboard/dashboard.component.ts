import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name = 'Angular';
  items = [];

  @ViewChild('scroll') scroller: VirtualScrollerComponent;

  constructor(private cd: ChangeDetectorRef) {
    for (let i = 1; i < 10; i++) {
      this.items.push({name: "Item " + i});
    }
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  appendData() {
    this.items.push({name: "Item " + (this.items.length + 1)})
    this.items = this.items.slice();
    this.scroller.scrollToIndex(this.items.length);
  }

  onVsUpdate(event) {
    console.log('vs update', event);
  }

  onVsChange(event) {
    console.log('vs change', event);
  }

  onVsStart(event) {
    console.log('vs start', event);
  }

  onVsEnd(event) {
    console.log('vs end', event);
  }

}
