import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SchedularMonthComponent } from './schedular/schedular-month.component';


@NgModule({
  declarations: [
    AppComponent,
    SchedularMonthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
