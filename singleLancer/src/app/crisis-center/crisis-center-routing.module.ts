import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CanDeactivateGuard} from '../can-deactivate-guard.service';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [
  {
  // {path: 'crisis-center', component: CrisisListComponent },
  // {path: 'crisis-center/:id', component: CrisisDetailComponent },
    path: '', component: CrisisCenterComponent,
    children: [
      {
        path: '', component: CrisisListComponent,
        children: [{
            path: ':id', component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {crisis: CrisisDetailResolverService}

          },
          {
            path: '', component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
   RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [ RouterModule],
  providers: [ CrisisDetailResolverService ]

})
export class CrisisCenterRoutingModule { }
