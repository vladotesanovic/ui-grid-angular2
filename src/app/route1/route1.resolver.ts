import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AngularjsResolver implements Resolve<{}> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100)
    })
  }
}
