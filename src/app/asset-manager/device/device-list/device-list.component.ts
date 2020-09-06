import { Component, Injector } from '@angular/core';
import { ListBase } from 'src/app/core/list-base.component';
import { Routes } from 'src/app/core/routes';
import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent extends ListBase<Device, DeviceService> {

  constructor(service: DeviceService, injector: Injector) {
    super(service, { "ROUTE": Routes.DEVICE_ROUTE }, injector);
  }

}
