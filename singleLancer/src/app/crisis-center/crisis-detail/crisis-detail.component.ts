import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { slideInDownAnimation } from '../../animations';
import { Crisis } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
