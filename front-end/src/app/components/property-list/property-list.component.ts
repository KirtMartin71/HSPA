import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Martin House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id":2,
      "Name":"Peters Villa",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id":3,
      "Name":"Casey Manor",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id":4,
      "Name":"Jones House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id":5,
      "Name":"Tarkin Home",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id":6,
      "Name":"Sanders Villa",
      "Type": "House",
      "Price": 12000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
