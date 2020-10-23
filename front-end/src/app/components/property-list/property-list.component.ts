
import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/interfaces/iproperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty>;

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
      }, error => {
        console.log("HTTP ERROR:");
        console.log(error);
      }
    );
  }

}
