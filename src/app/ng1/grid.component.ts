import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/map";

@Component({
  selector: 'app-grid',
  template: `<ui-grid [data]="myData" (onUpdate)="onUpdate($event)"></ui-grid><pre>{{ data | json }}</pre>`,
})
export class GridComponent {
  myData = [];
  data: {};

  constructor(public http: Http) {

    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .map((response: Response) => response.json())
      .subscribe((data) => {
        console.log(data);
        this.myData = data;
      });
  }

  onUpdate(data: {}) {
    this.data = data;
  }

}
