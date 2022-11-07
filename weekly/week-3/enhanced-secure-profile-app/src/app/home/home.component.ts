/**
 * Title: home.component.ts
 * Author: Manel Phiseme
 * Date: 6 November 2022
 * Description: Enhance secure profile app
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
  }

}
