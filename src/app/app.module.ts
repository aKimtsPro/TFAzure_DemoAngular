
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './core/components/nav/nav.component';
import { HeadComponent } from './core/components/head/head.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EurtobtcPipe } from './components/demo/demo3/eurtobtc.pipe';
import { Exo1Component } from './exercices/components/exercices/exo1/exo1.component';
import { TotimePipe } from './exercices/components/exercices/exo1/totime.pipe';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { EnfantComponent } from './components/demo/demo5/enfant/enfant.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Exo2childComponent } from './exercices/components/exercices/exo2/exo2child/exo2child.component';
import { Exo3Component } from './exercices/components/exercices/exo3/exo3.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { FourofourComponent } from './core/components/fourofour/fourofour.component';
import { TargetComponent } from './components/demo/demo8/target/target.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    NavComponent,
    HeadComponent,
    Demo3Component,
    EurtobtcPipe,
    Demo4Component,
    Demo5Component,
    EnfantComponent,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    FourofourComponent,
    TargetComponent,
    Demo9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
