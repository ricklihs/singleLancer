import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : '', redirectTo : '/superheroes', pathMatch : 'full'},
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
