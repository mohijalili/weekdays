import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from "@study-smarter/web/home/feature";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
