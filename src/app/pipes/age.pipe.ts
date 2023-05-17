import { Pipe, PipeTransform } from '@angular/core';
import { ValueFromArray } from 'rxjs';

@Pipe({
  name: 'age'
  
})
export class AgePipe implements PipeTransform {

 

  transform(value: Date ): any {
    let currentYear = new Date().getFullYear();
     
    let dobYear = value.getFullYear();
    let age = currentYear - dobYear

    return age + "Years Old";
    
  }

}
















































// transform(value: Date): any {
//   const currentYear = new Date().getFullYear();
//   const dobYear = value.getFullYear();    
//  const age = currentYear - dobYear;

//   return age + ' years old';
// }