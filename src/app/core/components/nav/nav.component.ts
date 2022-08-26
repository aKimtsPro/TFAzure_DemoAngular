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
      { url : 'demo', title : 'demo'}
    ]
  }

}
