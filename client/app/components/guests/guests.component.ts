import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestService } from './../../services/guests.service';
import { Guest } from './../../services/guests';
import { Component, OnInit } from '@angular/core';
// import {Common} from '@angular/common';
@Component({
    moduleId: module.id,
    selector: 'guest-app',
    templateUrl: 'guests.component.html',
    providers: [GuestService]
})
export class GuestsComponent implements OnInit {
    guests: Guest[];
    public addGuestForm: FormGroup;
    constructor(
        private _guestService: GuestService,
        private formBuilder: FormBuilder
    ) {
        this.addGuestForm = this.formBuilder.group({
            fname: ['', Validators.required],
            lname: [''],
            relationship: ['', Validators.required],
            NOA: ['', Validators.required],
            side: ['', Validators.required]
        });
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAllGuests();
    }

    getAllGuests() {
        this._guestService.getAllGuest()
            .subscribe(
            res => {
                this.guests = res.Guests;
            });
    }

    addGuest(model: Guest) {
        // console.log(model);
        this._guestService.addGuest(model)
            .subscribe(
            res => console.log(res)
            );
        this.resetForm();
        this.getAllGuests();
    }

    private resetForm() {
        // this.addGuestForm.controls.fname.value = '';
        // this.addGuestForm.controls.lname.value = '';
        // this.addGuestForm.controls.NOA.value = '';
        // this.addGuestForm.controls.relationship.value = '';
        // this.addGuestForm.controls.side.value = '';
        this.addGuestForm.reset();
    }

    removeGuest(guest: Guest) {
        this._guestService
            .removeGuest(guest)
            .subscribe(
            res => console.log(res)
            );
        this.getAllGuests();        
    }

}