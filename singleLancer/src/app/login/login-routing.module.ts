import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../auth-guard.service';
import { AuthGuard } from '../_guards/index';
import { AuthService } from '../_services/auth.service';
import { LoginComponent } from './login.component';

import { RegisterComponent } from '../register/index';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
   exports: [
    RouterModule
   ],
   providers: [
     AuthGuard,
     AuthService
   ]
})
export class LoginRoutingModule { }
