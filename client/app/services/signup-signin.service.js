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
        this.loginURL = '/users/login';
        this.registerURL = '/users/register';
    }
    SignUpSignIn.prototype.ngOnInit = function () {
        ;
    };
    SignUpSignIn.prototype.login = function (email, password) {
        var user = {
            email: email,
            password: password
        };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this._http.post(this.loginURL, user, options)
            .map(function (res) { return res.json(); });
    };
    SignUpSignIn.prototype.signup = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this.registerURL, user, options)
            .map(function (res) { return res.json(); });
    };
    return SignUpSignIn;
}());
SignUpSignIn = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SignUpSignIn);
exports.SignUpSignIn = SignUpSignIn;
//# sourceMappingURL=signup-signin.service.js.map