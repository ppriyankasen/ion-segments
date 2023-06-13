import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step-1/step1.component';
import { Step2Component } from './step-2/step2.component';
import { Step3Component } from './step-3/step3.component';

const routes: Routes = [
  {
    path: 'step1',
    component: Step1Component
  },
  {
    path: '',
    redirectTo: 'step1',
    pathMatch: 'full'
  },{
    path: 'step2',
    component: Step2Component,
  },{
    path: 'step3',
    component: Step3Component,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
