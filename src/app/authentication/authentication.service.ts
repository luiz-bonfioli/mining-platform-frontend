import { Injectable, Injector } from '@angular/core';
import { Service } from '../core/service';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../user/user';
import { Credentials } from './credentials';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends Service {
  
  public currentUser: User;

  constructor(injector: Injector) {
    super({ RESOURCE: 'authentication' }, injector);
  }

  public authenticate(login: string, password: string): Observable<User> {

    let credentials = new Credentials();
    credentials.login = login;
    credentials.password = password;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<User>(this.resource['RESOURCE'], credentials, { headers: headers }).pipe(map(response => response as User));
    
  }
}
