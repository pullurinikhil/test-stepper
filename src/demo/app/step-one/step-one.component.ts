import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-step-one",
  templateUrl: "./step-one.component.html",
  styleUrls: ["./step-one.component.css"]
})
export class StepOneComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit() {}
  initStepper(data?) {
    console.log(data);
    this.data = data;
  }
}
