import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {

  constructor(
    private navController: NavController) { }

  ngOnInit() {}

  next() {
    this.navController.navigateRoot('step2');
  }

}
