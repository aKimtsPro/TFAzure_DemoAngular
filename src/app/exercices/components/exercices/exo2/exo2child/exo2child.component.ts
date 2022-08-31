import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exo2child',
  templateUrl: './exo2child.component.html',
  styleUrls: ['./exo2child.component.scss']
})
export class Exo2childComponent implements OnInit {

  @Input() liste! : string[]

  @Input('obs-click') $obsClick!: Observable<null>;

  @Output() supprimerEvent : EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {

    this.$obsClick.subscribe(() => alert("salut"))

  }

  declencheSupprimerEvent(index : number) {
    this.supprimerEvent.next(index)
  }

}
