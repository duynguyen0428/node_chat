import { Observable } from 'rxjs/Rx';
import { AuthGuardService } from './services/auth.guard.service';
import { FormBuilder } from '@angular/forms';
import { SignUpSignIn } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [
    SignUpSignIn,
    AuthGuardService,
    FormBuilder,
  ]
})

export class AppComponent implements OnInit {

  constructor(
    private _authService: SignUpSignIn
  ) { }
  ngOnInit() {
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') != null;
  }

  public get CurrentLoggedInUser(): string {
    let current = localStorage.getItem('currentUser');
    return JSON.parse(current).username;
  }

  logout(){
    this._authService.logout();
  }
}
