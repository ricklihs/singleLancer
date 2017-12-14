// import { NgModule }       from '@angular/core';
// import { FormsModule }    from '@angular/forms';
// import { CommonModule }   from '@angular/common';

// import { CrisisService }        from './crisis.service';

// import { CrisisCenterComponent }     from './crisis-center.component';
// import { CrisisListComponent }       from './crisis-list.component';
// import { CrisisCenterHomeComponent } from './crisis-center-home.component';
// import { CrisisDetailComponent }     from './crisis-detail.component';

// import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     CrisisCenterRoutingModule
//   ],
//   declarations: [
//     CrisisCenterComponent,
//     CrisisListComponent,
//     CrisisCenterHomeComponent,
//     CrisisDetailComponent
//   ],
//   providers: [
//     CrisisService
//   ]
// })
// export class CrisisCenterModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisService } from './crisis.service';

import { CrisisCenterComponent } from './crisis-center.component';
//import { CrisisListComponent } from './crisis-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent],

  providers: [CrisisService]
})
export class CrisisCenterModule { }
