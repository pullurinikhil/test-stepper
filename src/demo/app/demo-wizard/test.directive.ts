import {
  Directive,
  Input,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";

@Directive({
  selector: "[appTest]"
})
export class TestDirective {
  @Input() appTest: any;
  @Input() stepData: any;
  componentRef: any;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    this.loadComponent(this.appTest);
  }
  loadComponent(component: any) {
    // component resolver
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    this.componentRef = this.viewContainerRef.createComponent(factory);
    if (this.componentRef) {
      this.componentRef.instance.initStepper(this.stepData);
    }
  }
}
