import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { slideInDownAnimation } from '../../animations';
import { Crisis, CrisisService } from '../crisis.service';
import { DialogService } from '../../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  // (1a) If do not use resolve in routing, then use crisis$ here
  // original <div *ngIf="crisis | async ">
  // template: `
  // <div *ngIf="crisis$ | async as crisis">
  //   <h3>"{{ editName }}"</h3>
  //   <div>
  //     <label>Id: </label>{{ crisis.id }}</div>
  //   <div>
  //     <label>Name: </label>
  //    <input [(ngModel)]="editName" placeholder="name"/>
  //   </div>
  //   <p>
  //     <button (click)="save()">Save</button>
  //     <button (click)="cancel()">Cancel</button>
  //   </p>
  // </div>
  // `,

  // styleUrls: ['./crisis-detail.component.css'],
  styles: ['input {width: 20em}'],
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis: Crisis;
  // (1a) crisis$: Observable<Crisis>;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService,
    // (1a) private service: CrisisService // if do not use resolve then use getCrisis in service
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: Crisis}) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });

      // (1a) If do not use resolve
      // this.crisis$ = this.route.paramMap
      // .switchMap((params: ParamMap) =>
      //   this.service.getCrisis(+params.get('id')));

  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo'}],
        { relativeTo: this.route});
  }
}
