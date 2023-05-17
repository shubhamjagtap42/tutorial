import { Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent {

  title = "Templates"
  Isavailable = true;

  months = ["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]

  tempfunction(event:any){

    this.Isavailable = !this.Isavailable
    console.log("Button Is False");
    // alert("Button Is Clicked")
    

  }

  changemonths(event:any){

    console.log("changed months from the dropdown");
    

  }
  

}
