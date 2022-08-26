import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eurtobtc'
})
export class EurtobtcPipe implements PipeTransform {

  transform(value: number, maxapresvirgule : number): string {
    let result : string = (value/21416).toString();
    let split : string[] =result.split('.')
    // let final : string = split[0]+'.'+ split[1].substring(0,maxapresvirgule)
    let final : string = `${split[0]}.${split[1].substring(0,maxapresvirgule)}`
    return 'BTC '+ final;
  }

}
