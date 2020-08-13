import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authenticationService.authenticate('user', 'password').subscribe(user => {
      if(user){
        this.authenticationService.currentUser = user;
        this.router.navigate([this.activatedRoute.snapshot.queryParams.returnUrl]);    
      }
    });
    
  }

}
