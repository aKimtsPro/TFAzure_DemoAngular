import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() valeurVenantDuParent! : string //Attendu par l'enfant à son appel par sélecteur

  maProp! : string

  @Output() changeValueEvent : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  startEvent() {
    this.changeValueEvent.next(this.maProp)
  }
}
