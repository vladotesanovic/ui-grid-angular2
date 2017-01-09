import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { UpgradeModule } from "@angular/upgrade/static";
import { Ng1ComponentFacade } from "./ng1/directive";
import { GridComponent } from "./ng1/grid.component";
import { Route1Component } from "./route1/route1.component";
import { Route2Component } from "./route2/route2.component";

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    GridComponent,
    Route2Component,
    Ng1ComponentFacade
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot([
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
      },
      {
        path: "route1",
        component: Route1Component
      },
      {
        path: "route2",
        component: Route2Component
      },
      { loadChildren: "app/home/home.module#HomeModule", path: "home" }
    ], { useHash: true }),
  ],
  entryComponents: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  ngDoBootstrap(): void {}
}
