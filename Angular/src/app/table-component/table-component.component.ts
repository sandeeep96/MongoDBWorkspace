import { Component, OnInit } from '@angular/core';
import { AnonymousSubscription } from "rxjs/Subscription";
import { Observable } from 'rxjs/Rx';
import { MyDataService } from '../mydata.service';
import { MyData } from '../mydata';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  winners: MyData[] = [];
  winners1: MyData[] = [];
  cols: any[];
  private timerSubscription: AnonymousSubscription;
  private postsSubscription: AnonymousSubscription;
  yearFilter: number;
  yearTimeout: any;
  year1Filter: number;
  year1Timeout: any;

  constructor(private winnerService: MyDataService) { }

  // loads columns and loads data in table and also refreshes data
  ngOnInit() {
    this.winnerService.getWinners()
      .subscribe(
      (data) => {
        data.forEach(item => {
          if (parseInt(item._id) <= 9 && parseInt(item._id) >= 0) {
            item._id = "00" + item._id;
          }
          else if (parseInt(item._id) <= 99 && parseInt(item._id) >= 10)
            item._id = "0" + item._id;
        })
        this.winners = data;
      });
    console.log("ng init");
    this.refreshData();
    this.cols = [
      { field: '_id', header: 'Id' },
      { field: 'stock', header: 'Stock' },
      { field: 'price', header: 'Price' },
      { field: 'offerPrice', header: 'OfferPrice' },
      { field: 'offerVolumn', header: 'OfferVolume' },
      { field: 'bidPrice', header: 'BidPrice' },
      { field: 'bidVolumn', header: 'BidVolume' },
      { field: 'tradedVolumn', header: 'TradedVolume' }
    ];
  }

  // unsubscribes the observable on moving away from componenet
  public ngOnDestroy(): void {
    console.log("ng destroy");
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  // checks for new data & adds to main data if any or prints no new data received when no new data is received
  private refreshData(): void {
    this.postsSubscription = this.winnerService.getWinners1().subscribe(
      (data) => {
        if (data == null) {
          console.log("no new data received")
        }
        else {
          this.winners1 = data;
          for (let i = 0; i < this.winners1.length; i++)
            this.winners.push(this.winners1[i])
        }
        this.subscribeToData();
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("completed");
      }
    );
  }

  // timer for every 1 sec
  private subscribeToData(): void {
    this.timerSubscription = Observable.timer(1000)
      .subscribe(() => this.refreshData());
  }

  // Methods for 2 sliders
  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }
    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'offerPrice', 'gt');
    }, 250);
  }
  onYear1Change(event, dt) {
    if (this.year1Timeout) {
      clearTimeout(this.year1Timeout);
    }
    this.year1Timeout = setTimeout(() => {
      dt.filter(event.value, 'price', 'gt');
    }, 250);
  }
}
