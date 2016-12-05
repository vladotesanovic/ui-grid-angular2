import {
  Directive, ElementRef, Injector, Input, OnInit, SimpleChanges, OnChanges, DoCheck,
  OnDestroy
} from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

@Directive({selector: 'ui-grid'})
export class Ng1ComponentFacade extends UpgradeComponent implements OnInit, OnChanges, DoCheck,
  OnDestroy {

  @Input() data: {};
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ui-grid', elementRef, injector);
  }

  ngOnInit() { super.ngOnInit(); }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }
  ngDoCheck() { super.ngDoCheck(); }
  ngOnDestroy() { super.ngOnDestroy(); }
}
