import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{
      path: "", component: DashboardComponent,
      children: [{
        path: "about",
        component: AboutComponent
      }]
    }])
  ],
  declarations: [DashboardComponent, AboutComponent]
})
export class DashboardModule { }
