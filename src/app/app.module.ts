import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Step1Component } from './step-1/step1.component';
import { Step2Component } from './step-2/step2.component';
import { Step3Component } from './step-3/step3.component';

@NgModule({
  declarations: [AppComponent, Step1Component, Step2Component, Step3Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
