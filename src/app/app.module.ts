import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UpgradeModule } from "@angular/upgrade/static";
import { Ng1ComponentFacade } from "./ng1/directive";
import { GridComponent } from "./ng1/grid.component";
import { Route1Component } from "./route1/route1.component";
import { Route2Component } from "./route2/route2.component";
import { SharedModule } from "./shared/shared.module";
import { routing } from "./app.routing";

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
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    UpgradeModule,
    routing,
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
