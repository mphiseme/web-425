/**
 * Title: composer-details.component.ts
 * Author: Manel Phiseme
 * Date: 30 October 2022
 * Description: Composer list component
 */
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
      //gets composer ID from path value
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')?? "0", 10);

     // composer is set to selected composer from id number above
    this.composer = this.composerService.getComposer(this.composerId)
  }

  ngOnInit(): void {
  }

}
