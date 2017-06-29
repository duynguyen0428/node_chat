import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class RegisterService implements OnInit {
    private registerURL;
    constructor(private _http: Http) {

    }

    ngOnInit() {
        this.registerURL = '/users/register';
    }

    register() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.registerURL, {}, options)
            .map(response => response.json());
    }


}