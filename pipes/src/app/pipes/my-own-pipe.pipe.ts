import { Pipe, PipeTransform } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';

@Pipe({
  name: 'myOwnPipe'
})
export class MyOwnPipePipe implements PipeTransform {

  transform(value: string): string {

    return value.toUpperCase();
  }

}
