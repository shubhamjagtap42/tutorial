import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shubham'
})
export class ReversestrPipe implements PipeTransform {
  namen: any;

  transform(value: any, ...args: unknown[]): unknown {

    this.namen = value.split("").reverse().join("")
    return this.namen;
  }

}
