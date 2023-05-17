import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  // products:any;
  products: any;
  Isavailable = false;
  Item: string[] = [];

  listitem() {
    //  alert("hello")

    this.Isavailable = true;

    this.products = [
      {
        Item: 'Pizza',
        Amount: '10',
        category: 'Food',
        Location: 'KFC',
        SpendOn: 'Wed Jul 01 2020',
        view: 'view',
      },
      {
        Item: 'Pizza',
        Amount: '14',
        category: 'Food',
        Location: 'Zomato',
        SpendOn: 'Wed Jul 01 2020',
        view: 'view',
      },
      {
        Item: 'Pizza',
        Amount: '15',
        category: 'Food',
        Location: 'McDonald',
        SpendOn: 'Wed Jul 01 2020',
        view: 'view',
      },
      {
        Item: 'Pizza',
        Amount: '09',
        category: 'Food',
        Location: 'KFC',
        SpendOn: 'Wed Jul 01 2020',
        view: 'view',
      },
    ];
    console.log(this.products.Item);
  }
}
