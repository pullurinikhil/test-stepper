import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import {
  NgWizardModule,
  NgWizardConfig,
  THEME
} from "../../../ng-wizard/public-api"; // BrowserModule no longer breaking here

import { DemoWizardComponent } from "./demo-wizard.component";
import { StepOneComponent } from "../step-one/step-one.component";
import { TestDirective } from './test.directive';

// routes
export const ROUTES: Routes = [{ path: "", component: DemoWizardComponent }];

// wizard
const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [DemoWizardComponent, StepOneComponent, TestDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgWizardModule.forRoot(ngWizardConfig),
    RouterModule.forChild(ROUTES)
  ],
  entryComponents: [StepOneComponent]
})
export class DemoWizardModule {}
