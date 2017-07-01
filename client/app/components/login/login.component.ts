import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpSignIn } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {User} from './../../services/user'
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
    private _formBuilder : FormBuilder,
    private _router: Router) {

  }

  ngOnInit(){
    this.loginForm = this._formBuilder.group({
      email : ['',[
        Validators.required,
        Validators.pattern("^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$")]],
      password : ['',[Validators.required]]
    });
  }

  login(model : User) {
    this._loginService.login(model)
    .subscribe(res =>{
      if(res.user){
        localStorage.setItem('currentUser', JSON.stringify(res.user));
      }  
    });
    this.loginForm.controls.email.value = '';
    this.loginForm.controls.password.value = '';

    this._router.navigate(['home']);    
  }
}
