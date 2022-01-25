import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-tasks2'
  firsnamn: String = 'Sarita'
  lastnamn: String = 'Ekman'
  age: number = 9
  gTSk: boolean = true
}
