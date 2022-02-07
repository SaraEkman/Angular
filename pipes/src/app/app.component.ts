import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';
  birthday: Date = new Date(1997, 4, 20)
  text: string = 'Mitt födelsedag är:';
}
