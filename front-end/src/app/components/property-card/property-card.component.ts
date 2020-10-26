import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { IProperty } from 'src/app/interfaces/iproperty';
>>>>>>> parent of 260a2506... Save new property

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

<<<<<<< HEAD
  @Input() property: any;
=======
  @Input() property: IProperty;
>>>>>>> parent of 260a2506... Save new property

  constructor() { }

  ngOnInit(): void {
  }

}
