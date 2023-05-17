import { Component } from '@angular/core';

@Component({
  selector: 'app-tempex2',
  template: 
  `<h1> WELCOME</h1>
  <h3> Name : {{Name}} </h3>`,
  


  styleUrls: ['./tempex2.component.css']
})
export class Tempex2Component {

  Name: string = "XYZ";

}
