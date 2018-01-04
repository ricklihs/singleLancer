import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    AdminDashboardComponent]
})
export class AdminModule { }
