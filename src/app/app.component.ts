import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { StockConfiguration } from './app.StockConfiguration';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  allStockValues = [];

  constructor(private http: Http, private sc: StockConfiguration) {

    this.allStockValues = this.sc.stockValues;
  }
  refreshAll() {
    for (let i = 0; i < this.allStockValues.length; i++) {
      this.getValuesFromAPI(this.allStockValues[i].tickerSymbol);
    }
  }
  getValuesFromAPI(stockTicker: string) {
    debugger;
    this.callAPI(stockTicker).subscribe(
      (success) => {
        debugger;
        this.parseAndCalculations(success["Time Series (Daily)"], success["Meta Data"]["2. Symbol"])
      },
      (failureResponse) => {
        debugger;
      });

  }
  parseAndCalculations(response: Object, stockTicker: string) {
    debugger;
    var currentDate = this.getRequiredDate("today");
    var OneDayBackDate = this.getRequiredDate("OneDayBack");
    var TwoDaysBackDate = this.getRequiredDate("TwoDayBack");
    var ThreeDaysBackDate = this.getRequiredDate("ThreeDayBack");
    let oneDayDifference = this.getDifference(response[currentDate]["4. close"], response[OneDayBackDate]["4. close"]);
    let twoDayDifference = this.getDifference(response[OneDayBackDate]["4. close"], response[TwoDaysBackDate]["4. close"]);
    let threeDayDifference = this.getDifference(response[TwoDaysBackDate]["4. close"], response[ThreeDaysBackDate]["4. close"]);

    let totalFallIn3Days = threeDayDifference + twoDayDifference + oneDayDifference;

    for (let i = 0; i < this.allStockValues.length; i++) {
      if (this.allStockValues[i].tickerSymbol === stockTicker) {
        this.allStockValues[i].currentValue = response[currentDate]["4. close"];
        this.allStockValues[i].oneDayChangeInValue = oneDayDifference.toFixed(2);
        this.allStockValues[i].twoDayChangeInValue = twoDayDifference.toFixed(2);
        this.allStockValues[i].threeDayChangeInValue = threeDayDifference.toFixed(2);
        this.allStockValues[i].fallin3Days = totalFallIn3Days.toFixed(2);
        if (oneDayDifference < 0 && twoDayDifference < 0) {
          this.allStockValues[i].Buy = "Yes";
          if (threeDayDifference < 0) {
            this.allStockValues[i].strongBuy = "Yes";
          }
        }
      }
    }


  }



  getDifference(current, oneday) {
    return (parseFloat(current) - parseFloat(oneday));
  }

  getRequiredDate(val: string): string {
    debugger;
    let date = new Date();
    let returnDate = "";

    if (date.getDay() === 6) {// If today is Saturday, go back one day
      date.setDate(date.getDate() - 1)
    }

    if (date.getDay() === 0) {// If today is Sunday, go back two days
      date.setDate(date.getDate() - 2)
    }

    if (val === "today") {
      let year = date.getFullYear().toString();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + (date.getDate())).slice(-2);
      returnDate = year + "-" + month + "-" + day;
    }
    else
      if (val === "OneDayBack") {
        if (date.getDay() === 1) {
          date.setDate(date.getDate() - 3)
        }
        else {
          date.setDate(date.getDate() - 1)
        }

        let year = date.getFullYear().toString();
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let day = ("0" + (date.getDate())).slice(-2);
        returnDate = year + "-" + month + "-" + day;
      }
      else
        if (val === "TwoDayBack") {
          if (date.getDay() === 2) {
            date.setDate(date.getDate() - 4)
          }
          else
            if (date.getDay() === 1) {
              date.setDate(date.getDate() - 4)
            }
            else {
              date.setDate(date.getDate() - 2)
            }

          let year = date.getFullYear().toString();
          let month = ("0" + (date.getMonth() + 1)).slice(-2);
          let day = ("0" + (date.getDate())).slice(-2);
          returnDate = year + "-" + month + "-" + day;
        }

        else
          if (val === "ThreeDayBack") {
            if (date.getDay() === 3) {
              date.setDate(date.getDate() - 5)
            }
            else
              if (date.getDay() === 2) {
                date.setDate(date.getDate() - 4)
              }
              else
                if (date.getDay() === 1) {
                  date.setDate(date.getDate() - 5)
                }
                else {
                  date.setDate(date.getDate() - 3)
                }

            let year = date.getFullYear().toString();
            let month = ("0" + (date.getMonth() + 1)).slice(-2);
            let day = ("0" + (date.getDate())).slice(-2);
            returnDate = year + "-" + month + "-" + day;
          }

    return returnDate;



  }
  private handleError(res: Response) {
    return Observable.throw("Error");
  }

  callAPI(stockValue: string): Observable<any> {
    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" + stockValue + "&apikey=6WTG3IU0B3005TDA";

    return this.http.get(url)
      .map((success: any) => {
        return success.json();
      })
      .catch(this.handleError);
  }
}

