import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WebShellModule } from '@study-smarter/web/shell/feature/web-shell';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, WebShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
