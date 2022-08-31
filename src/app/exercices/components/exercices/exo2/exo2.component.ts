import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  articleListe : string[] = []

  $clicked: Subject<null> = new Subject<null>();

  nouvelArticle! : string

  constructor() { }

  ngOnInit(): void {
  }

  ajout() {
    this.articleListe.push(this.nouvelArticle)
    this.nouvelArticle = ""
  }

  supprimer(index : number){
    this.articleListe.splice(index, 1)
  }

  onClick(){
    this.$clicked.next( null );
  }

}
