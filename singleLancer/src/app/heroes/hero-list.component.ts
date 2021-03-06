import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { Hero, HeroService} from './hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private selectedId: number;

  constructor(
    private router: Router,
    private service: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.switchMap((params: ParamMap) => {
       // (+) before `params.get()` turns the string into a number
      this.selectedId = +params.get('id');
      return this.service.getHeroes();

    });
  }

  goToDetails(id) {
    this.router.navigate(['/superhero', id]);
  }

}
