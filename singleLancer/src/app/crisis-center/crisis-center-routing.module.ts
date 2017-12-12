import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CrisisDetailResolverService]

})
export class CrisisCenterRoutingModule { }
