import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Produit } from './produit';
import { ProduitServiceService } from './produit-service.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss']
})
export class Demo9Component implements OnInit, OnDestroy {

  form: FormGroup;
  produits!: Produit[];
  totalPrix!: number;
  private _sub: Subscription;

  constructor(private service: ProduitServiceService, builder: FormBuilder) {

    this._sub = this.service.$listUpdated.subscribe( 
      {
        next: (produits) => {
          console.log(produits);
          this.produits = produits;
          this.totalPrix = service.totalPrix;
        },
        // error: (error) => console.error(error),
        // complete: () => alert("travail de l'observable terminé")
      }
    )

    this.form = builder.group({
      nom: [],
      prix: []
    })
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe() // si je n'unsub pas, je risque de crée une multitude d'abonnement tournant en paralèlle
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.ajouter(this.form.value)
  }

}
