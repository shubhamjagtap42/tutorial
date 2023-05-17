import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  title = 'Event Binding'

  months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]

  Isavailable = true;
  IsUnchanged = false;

 

  Clickfunction(event:any){

    alert("WELCOME TO EVENT BINDING");
    // console.log(event);
    

  }

  
//  onKeydown(event:any){

//   alert("keydown successfull")

//  }

 
onKeyUp(event:any){

  alert("keyup successfull")

 }
 
onBlur(event:any){

  // alert("blur successfull")
  console.log("Focus Is Lost");
  

 }
 
onFocus(event:any){

  // alert("blur successfull")
  console.log("Page Scroll");
  

 }
 @HostListener('window:scroll', ['$event'])
 divScroll(event:any){

  // alert("blur successfull")
  console.log("Page Scroll");
  

 }



  changemonths (event:any) {

    console.log("change month from the dropdown");
    console.log(event);
    
    
  }

  MyClickfunction(event:any){

    alert("SAVE Button IS Clicked")
    console.log("Save Button Is Clicked");
    console.log(event);
    
    

  }
  onSubmit(event:any){

    


  }
  ondblclick(event:any){

    alert("You CLick DBL")

    console.log("Submitted Successfuly");
    


  }
  onMouseEnter(event:any){

    console.log("Mouse Enter");
    


  }
  onMouseDown(event:any){

    console.log("Mouse Down");
    


  }
  onMouseUp(event:any){

    console.log("Mouse Up");
    


  }
  onCut(event:any){

    console.log("Txt Cut");
    


  }
  onCopy(event:any){

    console.log("Txt Copied");
    


  }
  onPaste(event:any){

    console.log("Txt paste");
    


  }

}
