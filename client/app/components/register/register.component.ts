import { User } from './../../services/user';
import { Router } from '@angular/router';
import { SignUpSignIn } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  providers: []
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public isEmailAvai : Boolean;
  public isUserNameAvai : Boolean;
  constructor(
    private _authservice: SignUpSignIn,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isEmailAvai = true;
  this.isUserNameAvai=true;
    
    this.registerForm = this._formBuilder.group({
      username: ['', [Validators.required],
              this.checkUserNameAV.bind(this)],
      email : ['',[Validators.required,
                  Validators.pattern("^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$")],
              ],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
    this.registerForm.controls.email.valueChanges
    .subscribe(
      value => {
        this._authservice.emailUniqe(value)
        .subscribe(res=>{
          console.log(res);
          if(!res){
            this.isEmailAvai = true;
          }else{
            this.isEmailAvai = false;
          }
        });
      }
    );

    this.registerForm.controls.username.valueChanges
    .subscribe(
      value =>
      {
        setTimeout(()=>
          this._authservice.userAvaibilityCheck(value)
          .subscribe(res=>{
          if(!res){
            this.isUserNameAvai = true;
          }else{
            this.isUserNameAvai = false;
          }
        }),1000 ) 
      }
    );

  }

  checkUserNameAV(control: FormControl){
    setTimeout(()=>
    this._authservice.userAvaibilityCheck(control.value)
    .subscribe(res=>{
        if(!res){
          this.isUserNameAvai = true;
        }else{
          this.isUserNameAvai = false;
        }
      }),1000 )
  }

  signup(model:User) {
    // console.log(model);
    this._authservice.signup(model)
      .subscribe(res => console.log(res));

    this._router.navigate(['/login'])
  };
}
