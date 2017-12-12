import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisService } from './crisis.service';
import { CrisisCenterRoutingModule } from './/crisis-center-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [CrisisCenterComponent, CrisisListComponent, CrisisDetailComponent],
  providers: [CrisisService]
})
export class CrisisCenterModule { }
