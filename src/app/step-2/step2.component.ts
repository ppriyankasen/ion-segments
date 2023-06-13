import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-step2',
  templateUrl: 'step2.component.html',
  styleUrls: ['step2.component.scss'],
})
export class Step2Component implements OnInit {

  public checkboxOptions: any;

  constructor(
    private router: Router,
    private nav: NavController
  ) {}

  ngOnInit() {
    const handleBack = this.router.getCurrentNavigation()?.extras?.state?.handleBack;
    this.checkboxOptions = [
      {name: 'Auto Accident', value: 'Auto Accident', key: 'autoAccident', isChecked: false},
      {name: 'Fall', value: 'Fall', key: 'fall', isChecked: false},
      {name: 'Personal Injury', value: 'Personal Injury', key: 'personalInjury', isChecked: false},
      {name: 'Injury at work', value: 'Injury at work', key: 'injuryAtWork', isChecked: false},
      {name: 'Injury at home', value: 'Injury at home', key: 'injuryAtHome', isChecked: false},
      {name: 'Motorcycle accident', value: 'Motorcycle accident', key: 'motorCycleAccidentHelmet', isChecked: false},
      {name: 'Other (please specify)', value: 'Other', key: 'other', isChecked: false}
    ];
    if (handleBack) {
      this.checkboxOptions[0].isChecked = true;
    }
  }

  public onCheckboxChange() {
    console.log('ionChage triggered');
  }

  public continue() {
    this.nav.navigateRoot('step3');
  }

  public back() {
    this.nav.navigateRoot('step1');
  }
}
