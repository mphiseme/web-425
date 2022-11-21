import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in-n-out-books';
  assignment = "";

  constructor(){
    this.assignment = "Exercise 5.3 - Data Tables"

  }
}
