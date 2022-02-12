import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { SlowObserverComponent } from './components/slow-observer/slow-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    SlowObserverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
