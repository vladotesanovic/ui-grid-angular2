import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-route1',
  template: `<h2>Grid Route </h2> <app-grid></app-grid>

`,
})
export class Route1Component implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {}
}
