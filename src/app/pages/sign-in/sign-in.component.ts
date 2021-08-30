import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {PopupService} from "../../shared/popup/popup.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];

  form: FormGroup = this.fb.group({
    username: this.fb.control(null, Validators.required),
    password: this.fb.control(null, Validators.required),
  });

  isWrongPassword = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private popupService: PopupService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isWrongPassword = false;

      const sub = this.authService.signIn(this.form.value).subscribe({
        next: response => {
          if (response) {
            this.popupService.toggle();
            void this.router.navigate(['/user']);
          } else {
            this.isWrongPassword = true;
          }
        }
      });

      this.subs.push(sub);
    } else {
      this.form.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
