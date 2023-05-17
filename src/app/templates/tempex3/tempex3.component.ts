import { Component } from '@angular/core';

@Component({
  selector: 'app-tempex3',
  templateUrl: './tempex3.component.html',
  styleUrls: ['./tempex3.component.css']
})
export class Tempex3Component {

  check = true;

  Name : string = "XYZ";    
  changeName() {    
    this.Name = "ABC";
    this.check = false 
  }  

}
