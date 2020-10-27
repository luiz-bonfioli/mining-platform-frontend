import { Component, OnInit } from '@angular/core';
import { HttpInterceptorService } from './core/interceptor/http-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  error: String = ""

  constructor(private httpInterceptor: HttpInterceptorService) {

  }
  ngOnInit(): void {
    this.httpInterceptor.errorHandler.subscribe(httpError => this.error = httpError.message)
  }



}
