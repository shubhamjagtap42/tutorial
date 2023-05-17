import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  visibleSidebar1 = false;
  

  showside(){

    this.visibleSidebar1 = true;
    // alert("hello")
  }
}
