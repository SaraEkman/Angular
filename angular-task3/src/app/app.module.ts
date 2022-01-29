import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IsevenComponent } from './components/iseven/iseven.component';
import { BooleanComponent } from './components/boolean/boolean.component';

@NgModule({
  declarations: [
    AppComponent,
    IsevenComponent,
    BooleanComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
