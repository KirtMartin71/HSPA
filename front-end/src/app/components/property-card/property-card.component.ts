import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: IProperty;

  constructor() { }

  ngOnInit(): void {
  }

}
