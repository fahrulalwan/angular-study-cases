import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Location} from "@angular/common";

export interface CanDeactivateGuard {
  canDeactivate(): boolean;
}

@Injectable()
export class MyformCandeactivateGuard implements CanDeactivate<CanDeactivateGuard> {
  constructor(private location: Location, private router: Router) {
  }

  canDeactivate(
    component: CanDeactivateGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canDeactivate = component.canDeactivate();

    if (this.router.getCurrentNavigation()?.trigger === 'popstate') {
      this.location.go(currentState.url);
      this.location.go(currentState.url);
    }

    return canDeactivate;
  }

}
