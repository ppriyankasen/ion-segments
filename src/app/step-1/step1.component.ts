import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {

  public selectedTab;

  constructor() { }

  ngOnInit() {}

  segmentChange(event) {
    alert ('IonChange triggered!!, selected tab >> ' + event.detail.value);
  }

  changeTabProg() {
    this.selectedTab = 3;
    alert ('Selected tab >> ' + this.selectedTab);
  }

}
