import { User } from './../../services/user';
import { Router } from '@angular/router';
import { SignUpSignIn } from './../../services/signup-signin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  providers: []
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private _authservice: SignUpSignIn,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      email : ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  signup(model:User) {
    // console.log(model);
    this._authservice.signup(model)
      .subscribe(res => console.log(res));

    this._router.navigate(['/'])
  };
}
