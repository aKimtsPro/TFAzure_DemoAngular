import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  private _produits: Produit[] = [
    {
      nom:'pomme',
      prix:1
    }
  ]
  private _$listUpdated = new BehaviorSubject<Produit[]>([...this._produits]);

  constructor() { }

  get produits() {
    return [...this._produits]
  }

  get $listUpdated(): Observable<Produit[]>{
    return this._$listUpdated.asObservable()
  }

  ajouter(toAdd: Produit){
    this._produits.push(toAdd);
    this._$listUpdated.next( this.produits );
    // this._$listUpdated.error( "mon erreur" ); // à envoyer si une erreur critique pour l'observable se produit
    // this._$listUpdated.complete(); // à envoyer si le travail de l'observable est terminé
    // Dans les 2 derniers cas, on ne plus s'attendre à recevoir des emissions 'next' par la suite
  }

  get totalPrix(){
    let total = 0;
    this._produits.forEach(p => total += p.prix);
    return total;
  }



}
