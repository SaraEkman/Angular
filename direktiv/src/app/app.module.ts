import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './dirctives/backgroundstyle/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
