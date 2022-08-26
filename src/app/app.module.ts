import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './core/components/nav/nav.component';
import { HeadComponent } from './core/components/head/head.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EurtobtcPipe } from './components/demo/demo3/eurtobtc.pipe';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { TotimePipe } from './components/exercices/exo1/totime.pipe';

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
    ExercicesComponent,
    Exo1Component,
    TotimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
