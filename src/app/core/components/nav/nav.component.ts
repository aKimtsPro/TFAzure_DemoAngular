import { Link } from './../../models/link.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() navList! : Link[]

  constructor() { }

  ngOnInit(): void {

  }

  switchChildrenVisible(index : number){
    this.navList[index].isChildrenVisible = !this.navList[index].isChildrenVisible
  }

}
