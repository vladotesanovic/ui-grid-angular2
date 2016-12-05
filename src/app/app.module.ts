import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { UpgradeModule } from "@angular/upgrade/static";
import { Ng1ComponentFacade } from "./ng1/directive";
import { GridComponent } from "./ng1/grid.component";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    Ng1ComponentFacade
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule,
    RouterModule.forRoot([
      { path: "", pathMatch: "full", redirectTo: "home"},
      { loadChildren: "app/home/home.module#HomeModule", path: "home" }
    ], { useHash: true }),
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [GridComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}
