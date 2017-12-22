import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { HomeComponent} from './home/home.component';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  { path : 'home', component : HomeComponent },
  {
    path : 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center1',
    loadChildren: 'app/crisis-center1/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  { path : 'superheroes1',
  loadChildren: 'app/heroes/heroes.module#HeroesModule',
  data: { preload: true }
  },
  { path : '', redirectTo : '/superheroes', pathMatch : 'full'},
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(
      appRoutes,
      // {
      //   enableTracing: true,
      //   preloadingStrategy: SelectivePreloadingStrategy
      // })
       {enableTracing: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
