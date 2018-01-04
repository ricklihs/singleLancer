import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
// import { AuthService } from '../auth.service';
// import { AuthService } from '../_services/auth.service';
import { AlertService, AuthenticationService, AuthService } from '../_services/index';

@Component({
  moduleId: module.id, // add
  selector: 'app-login',
  templateUrl: './login.component.html',
  // template: `
  // <h2>LOGIN</h2>
  // <p>{{message}}</p>
  // <p>
  //   <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
  //   <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
  // </p>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  // 1) add
  model: any = {};
  loading = false;
 // returnUrl: string;

  // constructor(public authService: AuthService, public router: Router) {
  //   this.setMessage();
  // }

  // 2)
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private authenticationService: AuthenticationService,
    private authService: AuthService,
    private alertService: AlertService
   ) { this.setMessage(); }

  setMessage() {
    this.message = ' Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }


   // 3)
   ngOnInit() {
    // reset login status
    // this.authenticationService.logout();
    this.authService.logout();

    // get return url from route parameters or default to '/'
   // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  // 4)
  // login() {
  //   this.message = 'Trying to log in ...';

  //   this.authService.login().subscribe(() => {
  //     this.setMessage();
  //     if (this.authService.isLoggedIn) {
  //       // Get the redirect URL from our auth service
  //       // If no redirect has been set, use the default
  //       const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

  //      // Set our navigation extras object
  //      // that passes on our global query params and fragment
  //      // preserve for current params and fragment
  //      const navigationExtras: NavigationExtras = {
  //        queryParamsHandling: 'preserve',
  //        preserveFragment: true
  //      };

  //      // Redirect the user
  //      this.router.navigate([redirect], navigationExtras);
  //     }

  //   });
  // }

  login() {
    this.message = 'Trying to log in ...';
    this.loading = true; // add
    this.authService.login(this.model.username, this.model.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';

       // Set our navigation extras object
       // that passes on our global query params and fragment
       // preserve for current params and fragment
       const navigationExtras: NavigationExtras = {
         queryParamsHandling: 'preserve',
         preserveFragment: true
       };

       // Redirect the user
       this.router.navigate([redirect], navigationExtras);
       // this.router.navigate([this.returnUrl]);
      }

    },
    error => {
      this.alertService.error('Username or password is incorrect');
      this.loading = false;
    }
  );
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
