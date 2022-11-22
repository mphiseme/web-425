/*
Title: book-list.component.ts
Author: Manel Phiseme
Date: 21 November 2022
Description: list of books of component app
*/

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book!: IBook;


  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();

  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string){
    this.book = this.booksService.getBook(isbn) ;
     console.log(this.book);
  }

}
