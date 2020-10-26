
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/interfaces/iproperty';
import { HousingService } from 'src/app/services/housing.service';
>>>>>>> parent of 260a2506... Save new property

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
<<<<<<< HEAD

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
=======

  sellRent: number = 1;
  properties: Array<IProperty>;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {

    if( this.route.snapshot.url.toString() ) {
      this.sellRent = 2;
    }

    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        this.properties = data;
      }, error => {
        console.log("HTTP ERROR:");
        console.log(error);
      }
    );
>>>>>>> parent of 260a2506... Save new property
  }

}
