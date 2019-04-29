import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  currentRoute = 'home';

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _location: Location) {
  }

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
