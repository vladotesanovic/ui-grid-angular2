import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { UpgradeModule } from "@angular/upgrade/src/aot/upgrade_module";
import { initAngularjs } from "./anglarjs";

if (environment.production) {
  enableProdMode();
}

initAngularjs();

export let upgrade: UpgradeModule;

// bootstrap Angular 2 application
const promise: Promise<{}> = platformBrowserDynamic()
  .bootstrapModule(AppModule);

promise.then((platformRef: { injector: { get: Function }}) => {

  const upgrade: UpgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ["ng1Module"], { strictDi: true });
});
