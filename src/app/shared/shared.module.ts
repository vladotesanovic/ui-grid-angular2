import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { SharedComponent } from "./shared.component";

@NgModule({
  imports:      [
    CommonModule
  ],
  declarations: [
    SharedComponent
  ],
  exports:      [
    SharedComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
