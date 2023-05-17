import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalfirst'
})
export class CapitalfirstPipe implements PipeTransform {

  // first = ["this is my first project"]

  transform(value:string): string {
    
    let first = value.substring(0,1).toUpperCase();
    return first + value.substring(1); 
  }

}
