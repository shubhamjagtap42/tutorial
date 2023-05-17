import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <div style="text-align: center;">
      <h1>Welcome to anemoi technology</h1>
      <h3>
        {{ name }}
      
      </h3>
    </div>
  `,

  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  name: string = 'Shubham Jagtap';
}
