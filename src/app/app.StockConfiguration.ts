import { Injectable } from '@angular/core';

@Injectable()
export class StockConfiguration {


  stockValues = [];
  constructor() {
    this.stockValues =
      [
        {
          "tickerSymbol": "GOOG",
          "tickerName": "Google",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"

        },
        {
          "tickerSymbol": "MU",
          "tickerName": "Micron Tech",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "AMD",
          "tickerName": "Amd",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "SQ",
          "tickerName": "Square",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "PYPL",
          "tickerName": "Paypal",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "NVDA",
          "tickerName": "Nividia",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "STM",
          "tickerName": "Stm",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "TWTR",
          "tickerName": "Twitter",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "CERN",
          "tickerName": "Cerner",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "BABA",
          "tickerName": "Alibaba Inc",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "AAPL",
          "tickerName": "Apple",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "AMZN",
          "tickerName": "Amazon",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "SNAP",
          "tickerName": "SnapChat",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "NFLX",
          "tickerName": "Netflix",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "V",
          "tickerName": "Visa",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "MA",
          "tickerName": "MasterCard",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "IDRA",
          "tickerName": "Idera",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "GERN",
          "tickerName": "Geron",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "JCP",
          "tickerName": "JC Penney",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "GRPN",
          "tickerName": "Groupon",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "BAC",
          "tickerName": "Bank Of America",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "COF",
          "tickerName": "Capital One",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "FB",
          "tickerName": "Facebook",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "MAR",
          "tickerName": "Mariott",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "ROKU",
          "tickerName": "Roku Inc",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "WMT",
          "tickerName": "Walmart",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "TSLA",
          "tickerName": "TESLA",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        },
        {
          "tickerSymbol": "CLDX",
          "tickerName": "Celldex Pharma",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "SHOP",
          "tickerName": "Shopify Inc",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
        ,
        {
          "tickerSymbol": "GPRO",
          "tickerName": "Go Pro",
          "currentValue": 0.00,
          "threeDayChangeInValue": 0.00,
          "twoDayChangeInValue": 0.00,
          "oneDayChaneInValue": 0.00,
          "fallin3Days": 0.00,
          "Buy": "No",
          "strongBuy": "No"
        }
      ]
  };


}

