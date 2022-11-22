/*
Title: book-list.component.ts
Author: Manel Phiseme
Date: 21 November 2022
Description: list of books of component app
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
