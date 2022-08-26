import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  isVisible : boolean = false

  maValeur : string = ""

  maListe : string[] = ["Arthur", "Perceval", "Merlin", "Leodagan"]
  constructor() { }

  ngOnInit(): void {
  }

  switchVisible() {
    this.isVisible = !this.isVisible
  }

}
