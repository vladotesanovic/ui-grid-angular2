import {
  Directive, ElementRef, Injector, Input, OnInit, SimpleChanges, OnChanges, DoCheck,
  OnDestroy
} from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({selector: 'ng1'})
export class Ng1TestComponentFacade extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
  OnDestroy {

  @Input() data: {};
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ng1', elementRef, injector);
  }

  ngOnInit() { super.ngOnInit(); }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }
  ngDoCheck() { super.ngDoCheck(); }
  ngOnDestroy() { super.ngOnDestroy(); }
}
