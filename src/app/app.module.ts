import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StockConfiguration } from './app.StockConfiguration';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [StockConfiguration],
  bootstrap: [AppComponent]
})
export class AppModule { }
