import { Component } from '@angular/core';
import { Link } from './core/models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TFAzure_Demo';

  listeLien : Link[] = [
    { title : 'home', url : 'home'},
    { title : 'about', url : 'about'},
    { title : 'Démos', children : [
      {title : 'Typescript', url : 'demo/demo1'},
      {title : 'Bindings', url : 'demo/demo2'},
      {title : 'Pipes', url : 'demo/demo3'},
      {title : 'Directives', url : 'demo/demo4'},
      {title : '@Input/@Output', url : 'demo/demo5'},
    ]},
    { title : "Exercices",  children : [
      {title : 'Chronomètre', url : 'exo/exo1'},
      {title : 'Shopping List', url : 'exo/exo2'},
    ]}
  ]
}
