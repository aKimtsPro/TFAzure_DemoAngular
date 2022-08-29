import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo2child',
  templateUrl: './exo2child.component.html',
  styleUrls: ['./exo2child.component.scss']
})
export class Exo2childComponent implements OnInit {

  @Input() liste! : string[]

  @Output() supprimerEvent : EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  declencheSupprimerEvent(index : number) {
    this.supprimerEvent.next(index)
  }

}
