import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-manager',
  templateUrl: './expense-manager.component.html',
  styleUrls: ['./expense-manager.component.css']
})
export class ExpenseManagerComponent {


  name = 'Pizza';
  Amount = '21';
  category ='Food';
  Location = 'Zomato';
  SpendOn ='Wed Jul 01 2020'

}
