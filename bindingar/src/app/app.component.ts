import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bindingar';

  src: string = "https://cdn.pixabay.com/photo/2018/04/06/16/47/unicorn-3296209_1280.png";
  imgUrl: boolean = true;

  divSty: boolean = true;
  divS: boolean = false;

  divC: string = 'div'
  divCla: string = 'divExt';

  toggle() {
    this.divS = !this.divS;
  }

}
