import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangetxt]'
})
export class ChangetxtDirective {

  // title = "Hiii";

  constructor(Element:ElementRef) {

    console.log(Element);

    Element.nativeElement.innerText="Text Is changed by changetxt directives.";
    

   }

}
