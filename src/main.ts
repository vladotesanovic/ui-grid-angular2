import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { UpgradeModule } from "@angular/upgrade/src/aot/upgrade_module";
import { initAngularjs } from "./anglarjs";

if (environment.production) {
  enableProdMode();
}

initAngularjs();

export let upgrade: UpgradeModule;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ["ng1Module"], { strictDi: true });
});
