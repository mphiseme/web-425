import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

   //composer array to be used to list composer
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId:110, fullName:"Johann Sebastian Bach", genre:"classical"},
      {composerId:220, fullName:"Florence Price", genre:"classical"},
      {composerId:111, fullName:"Francis Johnson", genre:"classical"},
      {composerId:113, fullName:"Dorothy Rudd Moore", genre:"classical"},
      {composerId:115, fullName:"Francis Johnson", genre:"classical"},
    ]
  }
  getComposers(){
    return this.composers;
  }

  getComposer(composerId: number) : IComposer{
    for (let composer of this.composers){
      if (composer.composerId === composerId){
        return composer;
      }
    }
    return {} as IComposer
  }
}
