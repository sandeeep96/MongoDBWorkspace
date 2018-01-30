import { Component, OnInit } from '@angular/core';

import {MyDataService} from '../mydata.service';
import {MyData} from '../mydata';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  winners: MyData[] = [];

  constructor(private winnerService: MyDataService) { }

  ngOnInit() {
    this.winnerService.getWinners()
    .subscribe(heroes => this.winners = heroes);
  }
}
