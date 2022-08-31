import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { Exo1Component } from './components/exercices/exo1/exo1.component';
import { Exo2Component } from './components/exercices/exo2/exo2.component';
import { Exo3Component } from './components/exercices/exo3/exo3.component';

export const routes: Routes = [
    { path: '', component: ExercicesComponent, children: [
          {path : 'exo1', component : Exo1Component},
          {path : 'exo2', component : Exo2Component},
          {path : 'exo3', component : Exo3Component},
    ] }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ExercicesRoutingModule{
}