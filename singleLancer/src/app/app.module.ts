import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { HeroesModule } from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login/login-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DialogService } from './dialog.service';

// add from client log
import { HttpModule } from '@angular/http';
import { AppConfig } from './app.config';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { RegisterComponent } from './register/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComposeMessageComponent,
    LoginComponent,
    PageNotFoundComponent,

    // add from client
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    HttpModule, // add from client
    LoginRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // routing
  ],
  providers: [
    DialogService,
    // add from client
    AppConfig,
    AuthGuard, // there are two AuthGuard ,other is in auth-guard.service and privid in login-routing.module.ts
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   // Diagnostic only: inspect router configuration
   constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
