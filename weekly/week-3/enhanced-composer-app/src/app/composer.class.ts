/**
 * Title: composer.class.ts
 * Author: Manel Phiseme
 * Date: 6 November 2022
 * Description: Enhanced composer
 */
import { IComposer } from "./composer.interface";

export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId:110, fullName:"Johann Sebastian Bach", genre:"classical"},
      {composerId:220, fullName:"Florence Price", genre:"classical"},
      {composerId:110, fullName:"Francis Johnson", genre:"classical"},
      {composerId:110, fullName:"Dorothy Rudd Moore", genre:"classical"},
      {composerId:110, fullName:"Francis Johnson", genre:"classical"},
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
