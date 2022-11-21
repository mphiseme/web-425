import { Injectable } from '@angular/core';
import {IBook} from './book.interface';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books:Array<IBook>

  constructor() {
    this.books = [
      {isbn:"883-8-38-900-6", title:"The Great Controversy", authors:["Elen G White"], description:"Covers the war between Good and Evil", numOfPages:377},
      {isbn:"578-2-400-4432-5", title:"Unpopular Culture", authors:["Guvna B"], description:"Reveal the unpopular culture in society", numOfPages:35},
      {isbn:"744-5-300-5998-3", title:"Get Unrealistic", authors:["Debleaire Snell"], description:"Book on walking by faith", numOfPages:138},
      {isbn:"111-1-255-211-0", title:"Rise", authors:["Trip Lee"], description: "Talk the stronger of being living for God", numOfPages:215},
      {isbn:"331-3-133-111-8", title:"The 5love Languages", authors:["Gary Chapman"], description:"covers different to express love", numOfPages:203},
    ]
   }
   getBooks():Observable<IBook[]>{
    return of(this.books);

   }
   getBook(isbn: string): IBook{
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;

   }
  }
  return {} as IBook;
}
}
