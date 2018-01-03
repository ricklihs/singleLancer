import { Injectable } from '@angular/core';

import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationExtras,
  CanLoad, Route
 } from '@angular/router';

 // import { AuthService } from './auth.service';
 // import { AuthService } from './_services/auth.service';
 import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  // 1)
  constructor( private authService: AuthService, private router: Router) { }

  // 2)
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);

  }

  canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  // state.url vs route.path
  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    // (1)
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    const sessionId = 12345678;

    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'session_id': sessionId,
        returnUrl: url // add from client
      },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;

     // (2) not logged in so redirect to login page with the return url
    //  this.router.navigate(['/login'], { queryParams: { returnUrl: url }});
    //  return false;
  }
}
