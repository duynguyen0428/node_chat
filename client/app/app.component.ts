import { FormBuilder } from '@angular/forms';
import { SignUpSignIn } from './services/signup-signin.service';
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[SignUpSignIn,FormBuilder]
})

export class AppComponent { }
