import { Component } from '@angular/core'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'observables'
  source = of(1, 2, 3)

  nums: number[] = [];

  observer = {
    next: (x: number) => {
      console.log(x)
      this.nums.push(x)
    },
    error: (err: any) => {
      console.log(err)
    },
    complete: () => {
      console.log('Complete')
    },
  }

  observableTO = new Observable<number>((o) => {
    let sequen: number[] = [1, 2, 3]
    let timeout: NodeJS.Timeout;

    let i = 0
    function main() {
      timeout = setTimeout(() => {
        o.next(sequen[i]);
        if (i == sequen.length - 1) o.complete();
        else ++i;
        main();
      }, 2000)
    }
    main()

    return {
      unsubscribe() {
        clearTimeout(timeout)
      },
    }
  })

  ngOnInit(): void {
    this.source.subscribe(this.observer)
    this.observableTO.subscribe(this.observer)
  }
}
