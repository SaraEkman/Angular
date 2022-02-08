import { Component } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ova-pipes';
  todo: Todo = new Todo ('Handla')
}