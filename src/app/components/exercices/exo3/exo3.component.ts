import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  nouvelArticle : string =""

  localListeArticle! : Article[]

  constructor(
    private shoppingService : ShoppingService
  ) { }

  ngOnInit(): void {
    this.localListeArticle = this.shoppingService.listeArticle
  }

  ajout() {
    if(this.nouvelArticle !== "") {
      this.shoppingService.ajout(this.nouvelArticle)
      this.nouvelArticle = ""
    }

  }

  supprimer(index : number) {
    this.shoppingService.supprimer(index)
  }

  addQty(index : number){
    this.shoppingService.addQty(index)
  }

  remQty(index : number) {
    this.shoppingService.remQty(index)
  }

}
