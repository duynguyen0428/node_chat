import { SignUpSignIn } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate{
    public isAuthenticated : Boolean;
    constructor(
        private _userService : SignUpSignIn,
        private _router : Router
    ){}

    canActivate(){
        if(this.loggedIn){
            return true;
        }

        this._router.navigate(['login'])
        return false;
    }

    get loggedIn(){
        return localStorage.getItem('currentUser');
    }
}