import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http'; // add

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';

@Injectable()
export class AuthService {

  // 1)
  constructor(private http: Http, private config: AppConfig) { }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  // 2)
  // login(): Observable<boolean> {
  //   return Observable.of(true)
  //     .delay(1000)
  //     .do(val => this.isLoggedIn = true);
  // }

  // http.post default return Observable<Response>
  login(username:  string, password: string): Observable<any> {
    return this.http.post(this.config.apiUrl + '/users/authenticate',
      { username: username, password: password }) // http.post return Response Type
        .map((response: Response) => {
          // login successful if there's a jwt token in the response
          const user = response.json();
          if ( user && user.token) {
               // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.isLoggedIn = true; // add
        });
  }

  logout(): void {
    this.isLoggedIn = false;

    // 4) remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
