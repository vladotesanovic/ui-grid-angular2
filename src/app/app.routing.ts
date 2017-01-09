import { RouterModule, Route } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { Route1Component } from "./route1/route1.component";
import { Route2Component } from "./route2/route2.component";

const routes: Route[] = [
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
  { loadChildren: "app/home/home.module#HomeModule", path: "home" },
  { loadChildren: "app/dashboard/dashboard.module#DashboardModule", path: "dashboard" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
