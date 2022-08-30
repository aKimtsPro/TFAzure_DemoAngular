import { AbstractControl, ValidatorFn } from "@angular/forms";

export function Taille(min: number, max : number) : ValidatorFn {
  return (control: AbstractControl) => {
    let value : string = control.value
    if(value === null) return null
    if(value.length < min || value.length > max)
      return {myError : "le champ doit etre compris entre " + min + " et " +max+"caratères"}
    return null
  }
}
