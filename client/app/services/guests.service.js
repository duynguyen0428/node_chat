"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var GuestService = (function () {
    function GuestService(_http) {
        this._http = _http;
        this.guestURL = '/guests';
        this.addGuestURL = '/guests/add';
        this.remoeGuestURL = '/guests/remove';
    }
    GuestService.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    GuestService.prototype.getAllGuest = function () {
        return this._http.get(this.guestURL)
            .map(function (guests) { return guests.json(); });
    };
    GuestService.prototype.addGuest = function (guest) {
        console.log(guest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.addGuestURL, JSON.stringify(guest), options)
            .map(function (res) { return res.json(); });
    };
    GuestService.prototype.removeGuest = function (guest) {
        console.log(guest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .post(this.remoeGuestURL, guest, options)
            .map(function (res) { return res.json(); });
    };
    return GuestService;
}());
GuestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GuestService);
exports.GuestService = GuestService;
//# sourceMappingURL=guests.service.js.map