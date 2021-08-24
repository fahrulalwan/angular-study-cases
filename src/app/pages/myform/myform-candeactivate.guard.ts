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

    if (canDeactivate) {
      // this.location.go(currentState.url);

      const currentUrlTree = this.router.createUrlTree(currentRoute.url);
      const currentUrl = currentUrlTree.toString();
      this.location.go(currentUrl);
      return false;
    } else {
      return true;
    }
  }

}
