import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule} from './app-routing.module';

import { HeroesModule } from './heroes/heroes.module';

import { DialogService } from './dialog.service';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ DialogService ],
  bootstrap: [AppComponent]
})
export class AppModule {
   // Diagnostic only: inspect router configuration
   constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
