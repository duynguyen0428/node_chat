import { SignUpSignIn } from './../../services/signup-signin.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: []
})

export class LoginComponent {
  constructor(private _loginService : SignUpSignIn) {

  }

  login(email: string, password: string) {
    this._loginService.login(email, password);
  }
}
