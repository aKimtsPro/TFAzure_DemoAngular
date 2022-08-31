import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { Exo3Component } from './components/exercices/exo3/exo3.component';
import { Exo2childComponent } from './components/exercices/exo2/exo2child/exo2child.component';
import { TotimePipe } from './components/exercices/exo1/totime.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExercicesRoutingModule } from './exercices-routing.module';



@NgModule({
  declarations: [
    ExercicesComponent,
    Exo1Component,
    Exo2Component,
    Exo3Component,
    Exo2childComponent,
    TotimePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExercicesRoutingModule
  ]
})
export class ExercicesModule { }
