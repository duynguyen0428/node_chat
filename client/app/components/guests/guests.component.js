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
var forms_1 = require("@angular/forms");
var guests_service_1 = require("./../../services/guests.service");
var core_1 = require("@angular/core");
// import {Common} from '@angular/common';
var GuestsComponent = (function () {
    function GuestsComponent(_guestService, formBuilder) {
        this._guestService = _guestService;
        this.formBuilder = formBuilder;
        this.addGuestForm = this.formBuilder.group({
            fname: ['', forms_1.Validators.required],
            lname: [''],
            relationship: ['', forms_1.Validators.required],
            NOA: ['', forms_1.Validators.required],
            side: ['', forms_1.Validators.required]
        });
    }
    GuestsComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAllGuests();
    };
    GuestsComponent.prototype.getAllGuests = function () {
        var _this = this;
        this._guestService.getAllGuest()
            .subscribe(function (res) {
            _this.guests = res.Guests;
        });
    };
    GuestsComponent.prototype.addGuest = function (model) {
        // console.log(model);
        this._guestService.addGuest(model)
            .subscribe(function (res) { return console.log(res); });
        this.resetForm();
        this.getAllGuests();
    };
    GuestsComponent.prototype.resetForm = function () {
        // this.addGuestForm.controls.fname.value = '';
        // this.addGuestForm.controls.lname.value = '';
        // this.addGuestForm.controls.NOA.value = '';
        // this.addGuestForm.controls.relationship.value = '';
        // this.addGuestForm.controls.side.value = '';
        this.addGuestForm.reset();
    };
    GuestsComponent.prototype.removeGuest = function (guest) {
        this._guestService
            .removeGuest(guest)
            .subscribe(function (res) { return console.log(res); });
        this.getAllGuests();
    };
    return GuestsComponent;
}());
GuestsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'guest-app',
        templateUrl: 'guests.component.html',
        providers: [guests_service_1.GuestService]
    }),
    __metadata("design:paramtypes", [guests_service_1.GuestService,
        forms_1.FormBuilder])
], GuestsComponent);
exports.GuestsComponent = GuestsComponent;
//# sourceMappingURL=guests.component.js.map