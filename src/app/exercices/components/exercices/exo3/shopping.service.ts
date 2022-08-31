import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  listeArticle : Article[] = []

  constructor() { }

  ajout(nom : string) {
    let index = this.listeArticle.findIndex(a => a.nom == nom)
    if(index > -1) this.addQty(index)
    else this.listeArticle.push({nom : nom, quantite : 1})
  }

  supprimer(index : number) {
    this.listeArticle.splice(index, 1)
  }

  addQty(index : number){
    this.listeArticle[index].quantite += 1
  }

  remQty(index : number) {
    if(this.listeArticle[index].quantite == 1) this.supprimer(index)
    else this.listeArticle[index].quantite -= 1
  }

}
