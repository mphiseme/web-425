/**
 * Title: home.component.ts
 * Author: Manel Phiseme
 * Date: 6 November 2022
 * Description: Enhance secure profile app
 */
import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {

   }
   signin(){
    this.isLoggedIn = true;
    this.router.navigate(['/home'],
    {queryParams:{isLoggedIn:this.isLoggedIn},
    skipLocationChange: true})
   }

  ngOnInit(): void {
  }

}
