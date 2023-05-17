import { Component } from '@angular/core';

@Component({
  selector: 'app-tempex1',
  templateUrl: './tempex1.component.html',
  styleUrls: ['./tempex1.component.css']
})
export class Tempex1Component {

  title = "Using Inline Template"

  allpersons :any =[]
   
  btnfunction(event:any){

    this.allpersons =[
      {name : "samir", age:"23" },
      {name : "narendra", age:"24"},
      {name : "laxman", age:"25" },
      {name : "sagar", age:"26" }
  
    ]
    console.log("works");
    

  }

}
