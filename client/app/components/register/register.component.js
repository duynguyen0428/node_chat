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
var router_1 = require("@angular/router");
var auth_service_1 = require("./../../services/auth.service");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(_authservice, _router, _formBuilder) {
        this._authservice = _authservice;
        this._router = _router;
        this._formBuilder = _formBuilder;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.isEmailAvai = true;
        this.isUserNameAvai = true;
        this.registerForm = this._formBuilder.group({
            username: ['', [forms_1.Validators.required],
                this.checkUserNameAV.bind(this)],
            email: ['', [forms_1.Validators.required,
                    forms_1.Validators.pattern("^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$")],
            ],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]]
        });
        this.registerForm.controls.email.valueChanges
            .subscribe(function (value) {
            _this._authservice.emailUniqe(value)
                .subscribe(function (res) {
                console.log(res);
                if (!res) {
                    _this.isEmailAvai = true;
                }
                else {
                    _this.isEmailAvai = false;
                }
            });
        });
        this.registerForm.controls.username.valueChanges
            .subscribe(function (value) {
            setTimeout(function () {
                return _this._authservice.userAvaibilityCheck(value)
                    .subscribe(function (res) {
                    if (!res) {
                        _this.isUserNameAvai = true;
                    }
                    else {
                        _this.isUserNameAvai = false;
                    }
                });
            }, 1000);
        });
    };
    RegisterComponent.prototype.checkUserNameAV = function (control) {
        var _this = this;
        setTimeout(function () {
            return _this._authservice.userAvaibilityCheck(control.value)
                .subscribe(function (res) {
                if (!res) {
                    _this.isUserNameAvai = true;
                }
                else {
                    _this.isUserNameAvai = false;
                }
            });
        }, 1000);
    };
    RegisterComponent.prototype.signup = function (model) {
        // console.log(model);
        this._authservice.signup(model)
            .subscribe(function (res) { return console.log(res); });
        this._router.navigate(['/login']);
    };
    ;
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: 'register.component.html',
        providers: []
    }),
    __metadata("design:paramtypes", [auth_service_1.SignUpSignIn,
        router_1.Router,
        forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map