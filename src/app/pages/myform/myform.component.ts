import { Component, OnInit } from '@angular/core';
import {CanDeactivateGuard} from "./myform-candeactivate.guard";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit, CanDeactivateGuard {

  form: FormGroup = this.fb.group({
    name: this.fb.control(null),
    todo: this.fb.control(null, Validators.required),
    note: this.fb.control(null),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  canDeactivate(): boolean {
    return !this.form.dirty;
  }

}
