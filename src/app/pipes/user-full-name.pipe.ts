import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(firstname: string, lastname:string): string {
    return firstname +""+lastname;
  }

}
