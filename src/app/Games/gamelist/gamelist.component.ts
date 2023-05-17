import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css'],
})
export class GamelistComponent {
  // products: any;

  
    products = [
      {
        Hideimage: '',
        Game: 'Castlevania',
        Part: 'aa:0101',
        ReleaseDate: 'septamber 26,1986',
        Cost: '$19.99',
        Thumbrating:""
        
        
      },
      {
        Hideimage: '',
        Game: 'Dr Mario',
        Part: 'aa:1100',
        ReleaseDate: 'july 27,1989',
        Cost: '$15.99',
      },
      {
        Hideimage: '',
        Game: 'Kid lcarus',
        Part: 'aa:1200',
        ReleaseDate: 'jun 18,1990',
        Cost: '$20.99',
      },
      {
        Hideimage: '',
        Game: 'Legend Of Zelda',
        Part: 'aa:0049',
        ReleaseDate: 'Aug 15,1992',
        Cost: '$20.95',
      },
      {
        Hideimage: '',
        Game: 'Mega Man',
        Part: 'aa:1042',
        ReleaseDate: 'December 09,1995',
        Cost: '$15.95',
      },
      {
        Hideimage: '',
        Game: 'Super Mario Bros',
        Part: 'aa:4511',
        ReleaseDate: 'November 03,1998',
        Cost: '$10.95',
      },
    ];
  
}
