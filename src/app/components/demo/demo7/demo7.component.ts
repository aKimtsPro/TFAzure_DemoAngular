import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Taille } from './taille.validator';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  fg! : FormGroup

  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this.builder.group({
      prenom : [null, [Validators.minLength(3), Validators.required]],
      email : ["mail@toto.com", [Validators.email, Taille(5, 10)]],
      date : [],
      tel : this.builder.array([
        new FormControl("", Validators.required)
      ])

    })
  }

  getTel() : FormArray {
    return this.fg.controls['tel'] as FormArray
  }

  valider() {
    console.log(this.fg.value)
  }

  ajoutTel() {
    this.getTel().push(new FormControl("", Validators.required))
  }

}
