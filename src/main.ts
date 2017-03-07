import { enableProdMode, forwardRef } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { initAngularjs } from "./anglarjs";
import { Router } from "@angular/router";
import { UpgradeAdapter } from "@angular/upgrade";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

if (environment.production) {
  enableProdMode();
}

let adapter = new UpgradeAdapter(forwardRef(()=> AppModule));
// const et = false;

// bootstrap Angular 1 application
initAngularjs(adapter);

adapter.bootstrap(document.documentElement, ["ng1Module"]).ready((ref) => {
  ref.ng2Injector.get(Router).initialNavigation();
});

// added workaround
platformBrowserDynamic().bootstrapModule(AppModule);

