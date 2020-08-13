import { Injectable } from '@angular/core';

@Injectable()
export class ContextService {
  public dateFormat: string;
  public dateTimeFormat: string;
  public timeFormat: string;
  public shortTimeFormat: string;
  public currentLanguage: string;
}
