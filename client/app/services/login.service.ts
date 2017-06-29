import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { Http, Headers,RequestOptions } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoignService implements OnInit {
    private loginURL;

    constructor(private _http: Http) { }

    ngOnInit() {
        this.loginURL = '/users/login';
    }

    login(): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.loginURL, {}, options)
            .map(user => user.json() as User)
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}