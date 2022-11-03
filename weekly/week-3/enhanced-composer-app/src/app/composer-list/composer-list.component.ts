import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Johann Sebastian Bach", "classical"),
      new Composer("Hildegard von Bingen", "classical"),
      new Composer("George Frideric Handel", "classical"),
      new Composer("Claude Debussy", "classical"),
      new Composer("Joseph Haydn", "classical")
    ]
  }

  ngOnInit(): void {
  }

}
