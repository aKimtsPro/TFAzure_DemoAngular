import { Exo1Component } from './exercices/components/exercices/exo1/exo1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { HomeComponent } from './components/home/home.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { FourofourComponent } from './core/components/fourofour/fourofour.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Demo8Component } from './components/demo/demo8/demo8.component';
import { TargetComponent } from './components/demo/demo8/target/target.component';
import { Demo9Component } from './components/demo/demo9/demo9.component';

const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'home', component : HomeComponent},
  { path : 'about', canActivate : [AuthGuard] , component : AboutComponent},
  { path : 'demo', component : DemoComponent, children : [
    { path : 'demo1', component : Demo1Component},
    { path : 'demo2', component : Demo2Component},
    { path : 'demo3', component : Demo3Component},
    { path : 'demo4', component : Demo4Component},
    { path : 'demo5', component : Demo5Component},
    { path : 'demo6', component : Demo6Component},
    { path : 'demo7', component : Demo7Component},
    { path : 'demo8', component : Demo8Component},
    { path : 'demo9', component : Demo9Component},
    { path : 'target/:id', component : TargetComponent},
  ]},
  { path: 'exo', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule) },
  {path : '404', component : FourofourComponent},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
