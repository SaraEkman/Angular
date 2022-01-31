import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowinfoComponent } from './components/showinfo/showinfo.component';
import { ExtrainfoComponent } from './components/extrainfo/extrainfo.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowinfoComponent,
    ExtrainfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
