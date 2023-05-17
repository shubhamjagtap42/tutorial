import { Component } from '@angular/core';

@Component({
  selector: 'app-dex1',
  template: `<button style="color:blue" [ngStyle]="styles()">Style Applied</button>`,
  styleUrls: ['./dex1.component.css']
})
export class Dex1Component {

  bold:boolean=true;
  fontsize:number=100;
  italic:boolean=true;

  styles(){
    var st = {
      'font-weight': this.bold ? 'bold' : 'normal',
      'font-style': this.italic ? 'italic' : 'normal',  
            'font-size.px': this.fontsize
    
    };
    return this.styles;
  }

}
