/**
 * Title: composer-list.component.ts
 * Author: Manel Phiseme
 * Date: 4 November 2022
 * Description: Composer list component
 */
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import {ComposerService} from '../composer.service';
import {FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  textSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.textSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(
      val => this.filterComposers(val ?? ""))
  }

  ngOnInit(): void {
  }

  filterComposers(name:string){
    alert(name)
  }


}
