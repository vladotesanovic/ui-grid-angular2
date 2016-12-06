import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { RouterModule } from "@angular/router";
import { UpgradeModule } from "@angular/upgrade/static";
import { AboutComponent } from "./about/about.component";
import { Ng1TestComponentFacade } from "./ng1/grid.directive";

@NgModule({
  imports: [
    CommonModule,
    UpgradeModule,
    RouterModule.forChild([{
      path: "", component: HomeComponent,
      children: [{
        path: "about", component: AboutComponent
      }]
    }])
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    Ng1TestComponentFacade
  ],
  bootstrap: [HomeComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule {}
