import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit, OnDestroy {

  private _maprop! : number

  get maprop() : number {
    return this._maprop
  }

  set maprop(value : number) {
    this._maprop = value
  }


  constructor() {
    console.log("construction")
  }
  ngOnDestroy(): void {
    console.log("destruction")

  }

  ngOnInit(): void {
    this.maprop = 0
    console.log(this._maprop)
    console.log("initialisation")
    this.methode()
  }

  monString : string = "salut"
  monNumber : number = 5.52
  maDate : Date = new Date()
  monBool : boolean = true
  monObjet : any = [{nom : "steve", id : 4}, {nom : "toto", id : 1}, new Date()]

  methode() {
    console.log(this.monObjet[0].nom)
    this.monObjet = new Date()
    console.log(this.monObjet)
    this.monObjet = () => { console.log("tu sers a rien")}
    this.monObjet()
    this.modif()
  }

  monClient : Client = new Client(1, "steve")

  modif() {
    this.monClient.date = new Date()
    this.monClient.afficherClient()
  }
}

export class Personne {
  sexe? : string

  constructor(sexe : string) {

    this.sexe = sexe
  }
}
export class Client extends Personne {
  id! : number
  nom! : string
  date? : Date

  constructor(id : number, nom : string) {
    super("x")
    this.id = id
    this.nom = nom
  }
  afficherClient() : void {
    console.log(this.nom + "\n " + this.date)
  }
}


