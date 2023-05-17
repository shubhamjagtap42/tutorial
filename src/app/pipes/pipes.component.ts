import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

title = "Angular project! 7";
todaydate = new Date();
currentDate = new Date();
birthday = new Date();
employees :any;
checked = false;
Fahrenheit : any;
celcius : any;
first : any = "this is my first project"
// sqrt : number

jasonval = {name:'narendra', age:'23',address:{a1:'ahamadnagar',a2:'pune'}}




showtable(){

  this.checked = true;

  this.employees =[
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
    }
    
  ];
  
}

}
