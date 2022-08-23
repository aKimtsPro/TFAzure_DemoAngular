import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  maProp : string = "Salut tout le monde"

  constructor() { }

  ngOnInit(): void {
  }

  modifString() {
    this.maProp = "autre chose"
  }

}
