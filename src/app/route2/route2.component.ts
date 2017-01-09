import { Component } from '@angular/core';

@Component({
  selector: 'app-route2',
  template: `<h2>Route 2 </h2> <form #form="ngForm" (submit)="logForm(form.value)">
<label>Firstname:</label>
  <input type="text" name="firstname" required ngModel>

  <label>Lastname:</label>
  <input type="text" name="lastname" required  ngModel>

  <label>Street:</label>
  <input type="text" name="street" ngModel>

  <label>Zip:</label>
  <input type="text" name="zip" ngModel>

  <label>City:</label>
  <input type="text" name="city" ngModel>

  <button [disabled]="!form.valid" type="submit">Submit</button>
</form>`,
})
export class Route2Component {
  constructor() {}

  logForm(value: any) {
    console.log(value);
  }
}
