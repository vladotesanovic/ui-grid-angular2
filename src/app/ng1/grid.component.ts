import { Component } from '@angular/core';
import { data } from "../data/data";

@Component({
  selector: 'app-grid',
  template: '<ui-grid [data]="myData"></ui-grid>',
})
export class GridComponent {
  myData = [];
  constructor() {
    this.myData = data;
    this.myData = [...this.myData, ...this.myData];
  }
}
