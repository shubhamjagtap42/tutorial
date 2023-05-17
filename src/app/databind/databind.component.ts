import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {

  title = "Data Binding";


  months = ["January","Feb","Mar","Apr","May","Jun","Jul"];

  Isavailable = true  ;

}
