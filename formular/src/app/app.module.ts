import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AddanimalWithformgroupsComponent } from './components/addanimal-withformgroups/addanimal-withformgroups.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    AddanimalWithformgroupsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
