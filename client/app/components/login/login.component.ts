import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpSignIn } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: []
})

export class LoginComponent implements OnInit{
  public loginForm : FormGroup;
  constructor(
    private _loginService : SignUpSignIn,
    private _formBuilder : FormBuilder) {

  }

  ngOnInit(){
    this.loginForm = this._formBuilder.group({
      email : ['',[
        Validators.required,
        Validators.pattern("^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$")]],
      password : ['',[Validators.required]]
    });
  }

  login(email: string, password: string) {
    this._loginService.login(email, password);
  }
}
