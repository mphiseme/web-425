/**
 * Title: my-details.component.ts
 * Author: Manel Phiseme
 * Date: 6 November 2022
 * Description: Enhance secure profile app
 */
import { Component, OnInit } from '@angular/core';

class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ["#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"];

  constructor( fullName: string,favoriteFood: string,favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Manel Phiseme", "Haitian food","Black")
   }

  ngOnInit(): void {
  }

}
