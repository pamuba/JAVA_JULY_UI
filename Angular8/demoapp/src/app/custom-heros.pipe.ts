import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customHeros'
})
export class CustomHerosPipe implements PipeTransform {

  transform(value: string,Id:number): string {
    return value + " #RANK " + Id.toString();
  }

}
