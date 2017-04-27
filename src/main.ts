import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { initAngularjs } from "./anglarjs";
import { Router } from "@angular/router";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UpgradeModule } from "@angular/upgrade/static";

if (environment.production) {
  enableProdMode();
}

// bootstrap Angular 1 application
initAngularjs();

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['ng1Module']);
  upgrade.ngZone.run(() => {
    upgrade.injector.get(Router).initialNavigation();
  });
});
