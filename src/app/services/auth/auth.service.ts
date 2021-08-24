import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  #authSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!localStorage.getItem('angular-study-case:auth')
      ? JSON.parse(localStorage.getItem('angular-study-case:auth') || 'false')
      : false
  );

  constructor(private router: Router) {
  }

  isLogin(): boolean {
    return this.auth;
  }

  set auth(value: boolean) {
    localStorage.setItem('angular-study-case:auth', JSON.stringify(value));
    this.#authSubject.next(value);
  }

  get auth(): boolean {
    return this.#authSubject.value;
  }

  signIn(request: { username: string; password: string }): Observable<boolean> {
    const authorizedUsername = 'admin';
    const authorizedPassword = 'admin';

    if (request.username === authorizedUsername && request.password === authorizedPassword) {
      this.auth = true;
      return of(true);
    } else {
      return of(false);
    }

  }

  signOut(): Promise<boolean> {
    this.auth = false;
    return this.router.navigateByUrl('/sign-in', {replaceUrl: true});
  }
}
