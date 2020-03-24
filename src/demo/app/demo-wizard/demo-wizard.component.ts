import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from "@angular/core";
import { StepOneComponent } from "../step-one/step-one.component";
import {
  NgWizardConfig,
  NgWizardService,
  StepChangedArgs,
  STEP_STATE,
  THEME
} from "../../../ng-wizard/public-api"; // 'ng-wizard'

@Component({
  selector: "app-demo-wizard",
  templateUrl: "./demo-wizard.component.html",
  styleUrls: ["./demo-wizard.component.css"]
})
export class DemoWizardComponent implements OnInit {
  configObj;
  @ViewChild("dynComponent", { static: true, read: ViewContainerRef })
  dynComponent: ViewContainerRef;
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      showPreviousButton: true,
      showNextButton: true,
      toolbarExtraButtons: [
        {
          text: "Finish",
          class: "btn btn-info",
          event: () => {
            alert("Finished!!!");
          }
        },
        {
          text: "Reset",
          class: "btn btn-danger",
          event: () => {
            this.resetWizard();
          }
        }
      ]
    }
  };

  stepChangedArgs: StepChangedArgs;
  selectedtheme: THEME;
  themes = [THEME.default, THEME.arrows, THEME.circles, THEME.dots];
  componentRef: any;

  constructor(
    private ngWizardService: NgWizardService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  ngOnInit() {
    this.selectedtheme = this.config.theme;
    this.configObj = [
      {
        component: StepOneComponent,
        stepData: {
          test: "test 1"
        }
      },
      {
        component: StepOneComponent,
        stepData: {
          test: "test 2"
        }
      }
    ];
    this.configObj.forEach(element => {
      // this.loadComponent(element["component"]);
    });
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.selectedtheme = this.config.theme;
    this.ngWizardService.reset();
  }

  themeSelected() {
    this.ngWizardService.theme(this.selectedtheme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
    this.stepChangedArgs = args;
  }
  loadComponent(component: any, item: ViewContainerRef) {
    // component resolver
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    this.componentRef = item.createComponent(factory);
    if (this.componentRef) {
      // this.componentRef.instance.initModal(this.data);
    }
  }
}
