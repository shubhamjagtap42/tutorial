import { Component } from '@angular/core';

@Component({
  selector: 'app-dex3',
  templateUrl: './dex3.component.html',
  styleUrls: ['./dex3.component.css'],
})
export class Dex3Component {
  name: string = 'Say Hello';
  checked = true;
  showElement:any;
  inpvalue:number=3;

  employees : any=[]
  
  showtable(){

    this.checked = false;

    this.employees = [
      {
        id: '001',
        name: 'Karthik',
        gender: 'Male',
        annualSalary: 5500,
        dateOfBirth: '25/6/1988',
      },
      {
        id: '002',
        name: 'Sachin',
        gender: 'Male',
        annualSalary:5700,
        dateOfBirth: '09/6/1982',
      },
      {
        id: '003',
        name: 'Rahul',
        gender: 'Male',
        annualSalary:6200,
        dateOfBirth: '11/8/1985',
      },
      {
        id: '004',
        name: 'Ramesh',
        gender: 'Male',
        annualSalary:8700,
        dateOfBirth: '16/9/1989',
      },
    ];
  
    // alert("hello")

    this.inpvalue;
    
  }
}
