import { Component } from '@angular/core';

@Component({
  selector: 'app-dex2',
  template: `<button style="color:blue" [ngClass]="Classes()">
    Style AppliedUsing Class
  </button>`,
  styles: [
    `
      .boldClass {
        font-weight: bold;
        font-size: 30px;
      }

      .italicsClass {
        font-style: italic;
      }

      .colorClass {
        color: grey;
      }
    `,
  ],
})
export class Dex2Component {
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;
  Classes: any;
  boldClasses: any;

  ApplyClasses() {
    let c = {
      boldClass: this.boldClasses,
      italicsClass: this.applyItalicsClass,
    };

    return this.Classes;
  }
}
