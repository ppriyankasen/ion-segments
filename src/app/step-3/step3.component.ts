import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {

  constructor(
    private navController: NavController) { }

  ngOnInit() {}

  handleBack() {
    const navigationOptions: NavigationOptions = {
      state: {
        handleBack: true
      }
    };
    this.navController.navigateRoot('step2', navigationOptions);
  }

}
