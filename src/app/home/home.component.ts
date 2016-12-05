import { Component } from '@angular/core';
import { data } from "../data/data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myData = [];
  constructor() {
    this.myData = data;
    this.myData = [...this.myData, ...this.myData];
  }

}
