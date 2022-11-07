/**
 * Title: home.component.ts
 * Author: Manel Phiseme
 * Date: 3 November 2022
 * Description: Secure profile app
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

  ngOnInit(): void {
  }
  signin(){
    this.isLoggedIn = true;
    this.router.navigate(['/home'],
    {queryParams:{isLoggedIn:this.isLoggedIn},
    skipLocationChange: true})
   }

}
