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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var SignUpSignIn = (function () {
    function SignUpSignIn(_http) {
        this._http = _http;
        // private loginURL = '/users/login';
        // private registerURL = '/users/register';
        this.loginURL = '/users/login';
        this.registerURL = '/users/register';
        this.usernameAVARUL = '/users/verifyusername';
        this.emailAVARUL = '/users/verifyemail';
        this.logOutURL = '/users/logout';
    }
    SignUpSignIn.prototype.ngOnInit = function () {
    };
    SignUpSignIn.prototype.login = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.loginURL, user, options)
            .map(function (res) { return res.json(); });
    };
    SignUpSignIn.prototype.signup = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.registerURL, user, options)
            .map(function (res) { return res.json(); });
    };
    SignUpSignIn.prototype.userAvaibilityCheck = function (username) {
        var user = {
            username: username
        };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.usernameAVARUL, user, options)
            .map(function (res) { return res.json(); });
    };
    SignUpSignIn.prototype.emailUniqe = function (email) {
        var user = {
            email: email
        };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.emailAVARUL, user, options)
            .map(function (res) { return res.json(); });
    };
    SignUpSignIn.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this.logOutURL)
            .map(function (res) { return res.json(); }).subscribe(function (res) { console.log(res); });
    };
    return SignUpSignIn;
}());
SignUpSignIn = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignUpSignIn);
exports.SignUpSignIn = SignUpSignIn;
//# sourceMappingURL=auth.service.js.map