import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path : 'home', component : HomeComponent},

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
    CommonModule, RouterModule.forRoot(
      appRoutes,
    {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
