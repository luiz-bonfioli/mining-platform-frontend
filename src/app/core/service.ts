import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from 'src/environments/settings';

export class Service
{
	protected httpClient: HttpClient  = this.injector.get(HttpClient);

	constructor(protected resource: { [key: string]: string; }, private injector: Injector) {
		this.resource['PARENT_RESOURCE'] = Settings.API_ENDPOINT + this.resource['PARENT_RESOURCE'];	
		this.resource['RESOURCE']        = Settings.API_ENDPOINT + this.resource['RESOURCE'];
	}
}
