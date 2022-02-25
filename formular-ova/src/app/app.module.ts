import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { FormbuilderComponent } from './components/formbuilder/formbuilder.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    AdduserComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
