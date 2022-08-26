import { Link } from './../../models/link.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navList! : Link[]

  constructor() { }

  ngOnInit(): void {
    this.navList = [
      { title : 'home', url : 'home'},
      { title : 'about', url : 'about'},
      { title : 'Démos', children : [
        {title : 'Typescript', url : 'demo/demo1'},
        {title : 'Bindings', url : 'demo/demo2'},
        {title : 'Pipes', url : 'demo/demo3'},
        {title : 'Directives', url : 'demo/demo4'},
      ]},
      { title : "Exercices",  children : [
        {title : 'Chronomètre', url : 'exo/exo1'}
      ]}
    ]
  }

  switchChildrenVisible(index : number){
    this.navList[index].isChildrenVisible = !this.navList[index].isChildrenVisible
  }

}
