import { Guest } from './guests';
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class GuestService implements OnInit {
    private guestURL = '/guests';
    private addGuestURL = '/guests/add';
    private remoeGuestURL = '/guests/remove';
    constructor(
        private _http: Http,
    ) { }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }

    getAllGuest(): Observable<Guest[]> {
        return this._http.get(this.guestURL)
            .map(
            guests => guests.json() as Guest[]
            );
    }

    addGuest(guest: Guest) {
        console.log(guest);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.addGuestURL, JSON.stringify(guest), options)
            .map(res => res.json());
    }

    removeGuest(guest: Guest) {
        console.log(guest);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http
            .post(this.remoeGuestURL, guest, options)
            .map(
            res => res.json()
            )

    }

    // private handleError(error: Response | any) {
    //     // In a real world app, you might use a remote logging infrastructure
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //         const body = error.json() || '';
    //         // const err = body.error || JSON.stringify(body);
    //         // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //         errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }

}