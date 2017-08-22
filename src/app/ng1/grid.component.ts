import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-grid',
  template: `<ui-grid [data]="myData$ | async" (onUpdate)="onUpdate($event)"></ui-grid><pre>{{ data | json }}</pre>`,
})
export class GridComponent implements OnInit {
  data: {};
  myData$: Observable<Object[]>;

  constructor(public http: Http) {}

  ngOnInit() {
    this.myData$ = this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map((response: Response) => response.json());
  }

  onUpdate(data: {}) {
    this.data = data;
  }

}
