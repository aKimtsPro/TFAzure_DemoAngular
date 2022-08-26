import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  monString : string = "BonjOuR, tOut le Monde"
  monNumber : number = 10.427
  maDate : Date = new Date()

  mesEuros : number = 1000.1234

  objet : any = {nom : "Arthur", metier : "Roi de Logres", id : 1}

  constructor() { }

  ngOnInit(): void {
  }

}
