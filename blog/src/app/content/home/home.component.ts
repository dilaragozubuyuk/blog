import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentRoute = 'home';

  constructor(
    private _location: Location,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.currentRoute = params['id'];
      this.scrollTo(this.currentRoute);
    });
  }

  onSectionChange(route: string) {
    this._location.go(route);
    this.currentRoute = route;
  }

  scrollTo(route) {
    document.querySelector('#' + route)
      .scrollIntoView();
    this.onSectionChange(route);
  }

}
