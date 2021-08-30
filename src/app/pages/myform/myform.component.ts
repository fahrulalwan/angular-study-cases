import {Component, OnInit} from '@angular/core';
import {CanDeactivateGuard} from "./myform-candeactivate.guard";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PopupService} from "../../shared/popup/popup.service";

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit, CanDeactivateGuard {

  form: FormGroup = this.fb.group({
    firstName: this.fb.control(null, Validators.required),
    lastName: this.fb.control(null, Validators.required),
    gender: this.fb.control(null, Validators.required),
    dateOfBirth: this.fb.control(null),
    email: this.fb.control(null),
    streetAddress: this.fb.control(null, Validators.required),
    streetAddressLine2: this.fb.control(null),
    city: this.fb.control(null, Validators.required),
    province: this.fb.control(null, Validators.required),
    zipCode: this.fb.control(null, Validators.required),
  })

  constructor(private fb: FormBuilder, private popupService: PopupService) {
  }

  ngOnInit(): void {
  }

  canDeactivate(): boolean {
    if (this.form.dirty) {
      return confirm('Are you sure want to leave without saving?');
    } else {
      return true;
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.popupService.toggle();
      this.form.reset();
      this.form.markAsPristine();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
